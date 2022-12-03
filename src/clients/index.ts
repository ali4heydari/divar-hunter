import axios from "axios";
import { MongoClient } from "mongodb";
import { SocksProxyAgent } from "socks-proxy-agent";
// @ts-ignore
import torAxios from "tor-axios";
import { log } from "../utils";

export const divarClient = axios.create({
  baseURL: "https://api.divar.ir",
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "application/json",
  },
});

const proxyOptions = {
  host: "tor",
  port: 9050,
};

const httpsAgent = new SocksProxyAgent(
  `socks5://${proxyOptions.host}:${proxyOptions.port}`
);
const httpAgent = new SocksProxyAgent(
  `socks5://${proxyOptions.host}:${proxyOptions.port}`
);

const tor = torAxios.torSetup({
  ip: "tor",
  port: 9050,
});

export const telegramBotClient = axios.create({
  baseURL: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`,
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "application/json",
  },
  httpsAgent: httpsAgent,
  httpAgent: httpAgent,
  timeout: 10_000,
});

telegramBotClient
  .get(" https://check.torproject.org/api/ip")
  .then((res) => log(JSON.stringify(res.data, null, 2)));

const mongoUrl = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`;

export const mongoClient = new MongoClient(mongoUrl);
