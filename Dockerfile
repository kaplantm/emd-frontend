FROM node:18-alpine

WORKDIR /app


COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]