FROM node:16-alpine

WORKDIR /back-end

COPY package.json /back-end

RUN npm install

COPY . /back-end

EXPOSE 3001

CMD ["npm", "run", "dev"]
