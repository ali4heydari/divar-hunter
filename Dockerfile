FROM node:14.18.2-alpine3.13 as builder
WORKDIR /app

# https://newbedev.com/how-to-run-a-cron-job-inside-a-docker-container
ADD crontab crontab
COPY entry.sh entry.sh
RUN chmod 755 entry.sh
RUN /usr/bin/crontab crontab


COPY package* .

RUN yarn install --frozen-lockfile --non-interactive

COPY . .

RUN yarn tsc:prod

CMD ["./entry.sh"]


