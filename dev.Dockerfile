FROM node:16-alpine as build-stage

WORKDIR /app

COPY . /app

EXPOSE 3009