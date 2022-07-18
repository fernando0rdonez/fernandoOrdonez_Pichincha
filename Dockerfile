FROM node:alpine

RUN npm install -g ts-node

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install --omit=dev

EXPOSE 3001
CMD [ "npm", "start" ]