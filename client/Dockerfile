FROM node:latest

RUN npm install -g create-react-app
COPY . /opt/client
WORKDIR /opt/client
RUN npm install

ENTRYPOINT npm start