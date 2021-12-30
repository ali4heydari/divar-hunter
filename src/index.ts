import path from "path";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: path.join(__dirname, "..", ".env"),
  });
}

import { URLSearchParams } from "url";
import { SendMessage, WebSearchResponseDto } from "./dtos";
import { divarClient, mongoClient, telegramBotClient } from "./clients";

async function sendFilterMessage(filters: {}, chatId: string | number) {
  try {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Tehran",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      dateStyle: "full",
      timeStyle: "medium",
    };

    const filterMessageText = `<code>${JSON.stringify(
      {
        filters,
        gregorianDateTime: new Date().toLocaleString("en-US", options),
        jalaliDateTime: new Date().toLocaleString("fa-IR", options),
      },
      null,
      2
    )}</code>`;

    const sendConditionMessageResponse =
      await telegramBotClient.post<SendMessage>("/sendMessage", {
        chat_id: chatId,
        text: filterMessageText,
        parse_mode: "HTML",
      });

    if (!sendConditionMessageResponse.data.ok) {
      throw new Error(
        JSON.stringify(sendConditionMessageResponse.data, null, 2)
      );
    }
  } catch (error) {
    console.log("error sending filter message", { error });
  }
}

(async () => {
  try {
    await mongoClient.connect();
    console.log("connected to mongo");

    const db = mongoClient.db(process.env.MONGO_DB_NAME as string);
    let postCollection = await db.collection("posts");

    if (!postCollection) {
      postCollection = await db.createCollection("posts");
    }

    const urls =
      process.env?.DIVAR_URLS?.split(";").map((it) => it.trim()) ?? [];

    const subscribers =
      process.env?.TELEGRAM_CHAT_IDS?.split(";").map((it) => it.trim()) ?? [];

    for (const urlStr of urls) {
      const url = new URL(urlStr);

      const urlSearchParams = new URLSearchParams(url.search);

      let filters = {};

      urlSearchParams.forEach((value, key) => {
        filters = {
          ...filters,
          [key]: value,
        };
      });
      console.log({ filters });

      const response = await divarClient.get<WebSearchResponseDto>(
        url.href.replace(
          "https://divar.ir/s/",
          "https://api.divar.ir/v8/web-search/"
        ),
        {
          params: urlSearchParams,
        }
      );

      for (let i = 0; i < response.data.web_widgets.post_list.length; i++) {
        const { data: post, widget_type } =
          response.data.web_widgets.post_list[i];

        if (widget_type !== "default_post_widget") {
          continue;
        }

        for (const chatId of subscribers) {
          const existedPost = await postCollection.findOne({
            token: post.token,
            chatId,
          });

          if (post.token && !existedPost) {
            const huntMessageText = `<a href="${post.image}">📷</a>\n<b>${post.title}</b>\n<i>${post.description}</i>\n${post.district}\nhttps://divar.ir/v/a/${post.token}`;

            const sendMessageResponse =
              await telegramBotClient.post<SendMessage>("/sendMessage", {
                chat_id: chatId,
                text: huntMessageText,
                parse_mode: "HTML",
              });

            if (sendMessageResponse.data.ok) {
              console.log(
                `Message sent successfully for https://divar.ir/v/a/${post.token}`
              );

              await postCollection.insertOne({
                token: post.token,
                categoryHierarchy: post.category_hierarchy,
                city: post.city,
                messageId: sendMessageResponse.data.result.message_id,
                chatId,
              });
            }
          }
        }
      }
    }
  } catch (error: any) {
    if (error.response.data) {
      console.log(error.response.data);
    } else {
      console.log({ error });
    }
  } finally {
    await mongoClient.close();
    console.log("disconnected from mongo");
  }
})();
