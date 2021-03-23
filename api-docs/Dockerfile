FROM artifactory-dev.tfs.toyota.com/dnecloud-docker-dev-remote/node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]