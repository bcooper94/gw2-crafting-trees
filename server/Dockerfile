FROM node:latest

COPY . /opt/server
WORKDIR /opt/server
RUN npm install
RUN npm install -g nodemon

ENTRYPOINT nodemon src/index.js