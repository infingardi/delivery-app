FROM node:16-alpine

WORKDIR /front-end

COPY package*.json ./front-end

RUN npm install

COPY ./ /front-end

CMD ["npm", "start"]

EXPOSE 3000