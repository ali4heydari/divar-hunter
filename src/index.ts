import path from "path";

import { URLSearchParams } from "url";
import { SendMessage, WebSearchResponseDto } from "./dtos";
import { divarClient, mongoClient, telePushClient } from "./clients";
import { log, sleep } from "./utils";
import { isAxiosError } from "axios";

async function sendFilterMessage(filters: {}, chatId: string | number) {
  try {
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
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
        gregorianDateTime: new Date().toLocaleString(
          "en-US",
          dateTimeFormatOptions
        ),
        jalaliDateTime: new Date().toLocaleString(
          "fa-IR",
          dateTimeFormatOptions
        ),
      },
      null,
      2
    )}</code>`;

    const sendConditionMessageResponse = await telePushClient.post<SendMessage>(
      "/sendMessage",
      {
        chat_id: chatId,
        text: filterMessageText,
        parse_mode: "HTML",
      }
    );

    if (!sendConditionMessageResponse.data.ok) {
      throw new Error(
        JSON.stringify(sendConditionMessageResponse.data, null, 2)
      );
    }
  } catch (error) {
    log(
      "error sending filter message:" + JSON.stringify({ error }, null, 2),
      "ERROR"
    );
  }
}

(async () => {
  if (process.env.NODE_ENV === "development") {
    require("dotenv").config({
      path: path.join(__dirname, "..", ".env"),
    });
  }
  try {
    log("starting, env vars:" + JSON.stringify(process.env, null, 2));

    await mongoClient.connect();
    log("connected to mongo");

    const db = mongoClient.db(process.env.MONGO_DB_NAME as string);
    let postCollection = await db.collection("posts");

    if (!postCollection) {
      postCollection = await db.createCollection("posts");
    }

    const urls =
      process.env?.DIVAR_URLS?.split(";").map((it) => it.trim()) ?? [];

    const subscribers =
      process.env?.TELEPUSH_CHAT_IDS?.split(";").map((it) => it.trim()) ?? [];

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

      const response = await divarClient.get<WebSearchResponseDto>(
        url.href.replace(
          "https://divar.ir/s/",
          "https://api.divar.ir/v8/web-search/"
        ),
        {
          params: urlSearchParams,
        }
      );

      log(`${response.data.web_widgets.post_list.length} post founded`);

      for (let i = 0; i < response.data.web_widgets.post_list.length; i++) {
        const { data: post, widget_type } =
          response.data.web_widgets.post_list[i];

        if (widget_type !== "POST_ROW") {
          continue;
        }

        for (const chatId of subscribers) {
          log(`sending message to ${chatId}`);
          const existedPost = await postCollection.findOne({
            token: post.token,
            chatId,
          });

          if (post.image_url && post.token && !existedPost) {
            const huntMessageText = `${post.image_url
              .map((it) => `[📷](${it.src})`)
              .join(" ")}\n**${post.title}**\n__${
              post.top_description_text
            }__\n${
              post.action.payload.web_info.city_persian +
              " " +
              post.action.payload.web_info.district_persian
            }\nhttps://divar.ir/v/a/${post.token}`;

            log(`sending message to ${chatId}: ${huntMessageText}`);

            await telePushClient.post(`/messages/${chatId}`, {
              text: huntMessageText,
              type: "text",
              origin: "divar hunter bot",
            });

            log(
              `Message sent successfully for https://divar.ir/v/a/${post.token}`
            );

            await postCollection.insertOne({
              token: post.token,
              city: post.action.payload.web_info.city_persian,
              chatId,
            });
          }
        }
      }
    }
  } catch (error: any) {
    if (isAxiosError(error)) {
      log(error.message + "-" + error.code, "ERROR");
    } else {
      throw error;
    }
  } finally {
    await mongoClient.close();
    log("disconnected from mongo");

    const coolDownTime = Number(process.env.SLEEP_TIME || 5 * 1000);

    log(`Waiting for ${coolDownTime}ms`);
    await sleep(coolDownTime);
  }
})();
