FROM node:18.12.0-alpine as builder
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --non-interactive

COPY . .

RUN yarn tsc:prod

CMD ["node", "/app/build/index.js"]


