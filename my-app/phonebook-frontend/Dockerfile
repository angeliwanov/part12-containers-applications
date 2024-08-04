FROM node:20 AS base

WORKDIR /usr/src/app

COPY . .

RUN npm ci

FROM base as test

RUN npm run test

FROM test AS build-stage

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

