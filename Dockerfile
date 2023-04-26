FROM node:lts-alpine3.17

RUN apk --no-cache add shadow \
    && groupmod -g 1010 node \
    && usermod -u 1010 -g 1010 node

ARG HOST_UID

ARG HOST_GID

RUN addgroup -g ${HOST_GID} angular && adduser -u ${HOST_UID} -G angular -s /bin/sh -D angular

USER angular

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

WORKDIR /app_bk

RUN cp -a /app/node_modules/. ./node_modules && cp -a /app/package-lock.json ./package-lock.json

WORKDIR /app

ENTRYPOINT [ "/app/entrypoint.sh" ]

CMD ["node_modules/.bin/ng","serve","--host", "0.0.0.0"]