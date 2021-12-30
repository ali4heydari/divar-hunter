# Divar hunter Bot

1. Rename `.env.sample` to `.env`
2. Go to [`@BotFather`](https://t.me/BotFather) in Telegram.
3. Type `/newbot`, follow the instructions to create a new bot and copy the bot token. (Also, you can use existing bot token)
4. Start the bot by sending `/start` to the bot.
5. Paste the bot token in the `.env` file.

```dotenv
TELEGRAM_BOT_TOKEN = '<TELEGRAM_BOT_TOKEN_FROM_LAST_STEP>'
```

6. Get your telegram id by sending a message to [`@getidsbot`](https://t.me/getidsbot) in Telegram.

Copy `id` and paste it into the `.env` file. You can use multiple ids separated by a semi-colon `;`

> It's recommended not to use too many ids because it will cause the bot to ban from Telegram.

```dotenv
TELEGRAM_CHAT_IDS = '<TELEGRAM_CHAT_IDS>'
```

7. Go to the [divar.ir](https://divar.ir), and search and apply the filters for the goods that you want to buy. 
Then copy the URL of the page and paste it in the `.env` file.

You can use multiple URLs separated by semi-colon `;`

> It's recommended to not use too many URLs because it will cause the bot to ban from Divar.

8. Build and run docker image with `docker-compose up --build` command.

```bash
docker-compose up --build
```
