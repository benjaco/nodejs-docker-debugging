# Created by PhpStorm
FROM node:9

# Define app directory
WORKDIR /usr/src/app

RUN npm install -g nodemon
COPY package.json ./
RUN npm install

COPY . ./

ENV NODE_ENV "det er min egen fucking docker fil,  juuuhuuu"

EXPOSE 80 9229
ENTRYPOINT nodemon -L  --inspect=0.0.0.0 --experimental-modules server/index.mjs