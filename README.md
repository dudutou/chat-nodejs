This is a simple chat tool written in Nodejs(Express, mongoose, socket.io) & mongodb.
# Refer: https://medium.freecodecamp.org/simple-chat-application-in-node-js-using-express-mongoose-and-socket-io-ee62d94f5804

1. Start server: run server in dockers.
- docker1: node:latest
  docker run --name node-dev -p 5000:80 -it -v ~/study/nodejs/chat:/app/chat node sh
  cd /app/chat
  node server.js

- mongodb: mongo:latest
  docker run --name my-mongo -p 28000:27017 -d mongo
  docker container exec -it my-mongo mongo
  use chat

2. Start client in browsers.
  http://localhost:5000

TODO:
1. Add authentication.
2. Use MQ to do heavy process.
3. Use Redis to cache frequently readed information(eg. News).
4. Run it in Kubenetes.
5. Support search (ElasticSearch)
6. Use nginx as loadbalancer
7. Run it in AWS.
