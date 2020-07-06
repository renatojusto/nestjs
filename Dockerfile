FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

# RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.2.0

USER node

COPY . /src

# COPY package.json /src

# RUN npm install
# COPY . /home/node/app/

# WORKDIR /home/node/app/

# COPY ./.docker/entrypoint.sh ./.docker/entrypoint.sh

ENTRYPOINT ["src/.docker/entrypoint.sh"]

# VOLUME . /home/node/app

EXPOSE 3000