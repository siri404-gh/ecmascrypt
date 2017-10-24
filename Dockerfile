FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --only=dev
ADD server server
ADD variables variables
ADD output output
EXPOSE 5000
CMD [ "npm", "start" ]