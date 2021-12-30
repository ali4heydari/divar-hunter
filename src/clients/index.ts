import axios from "axios";
import { MongoClient } from "mongodb";

export const divarClient = axios.create({
  baseURL: "https://api.divar.ir",
  headers: {
    "Content-Type": "application/json",
  },
});

export const telegramBotClient = axios.create({
  baseURL: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const mongoUrl = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`;

export const mongoClient = new MongoClient(mongoUrl);
