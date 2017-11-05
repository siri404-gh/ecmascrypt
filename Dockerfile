FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
RUN npm i express body-parser morgan
ADD output output
ADD server server
ADD variables variables
EXPOSE 3333
CMD [ "node", "server/server" ]