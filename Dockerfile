FROM node:latest AS app
WORKDIR /
COPY . .
RUN npm install
RUN npm run ohana-nix
RUN npm run dev
EXPOSE 3000
ENTRYPOINT ["node", "./server/server.js"]
