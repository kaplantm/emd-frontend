FROM node:18-alpine

WORKDIR /app


COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

ARG VITE_API_BASE_URL=http://18.217.74.192
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]