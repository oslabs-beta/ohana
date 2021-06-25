FROM node:latest AS app
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
ENTRYPOINT ["node", "./server/server.js"]

FROM gcr.io/google.com/cloudsdktool/cloud-sdk:latest as gcloud
WORKDIR /

# FROM kiwigrid/gcloud-kubectl-helm:latest as gcloud
# WORKDIR /
# COPY . .

FROM debian:latest as os
WORKDIR /
COPY --from=app / .
COPY --from=gcloud / .
RUN apt-get update
# RUN apt-get install vim
CMD npm run dev
