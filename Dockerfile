FROM node:21-alpine3.18
WORKDIR /app
COPY . /app
RUN npm install
CMD [ "node", "index.js"]