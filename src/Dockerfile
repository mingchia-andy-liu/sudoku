FROM node:10-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

# install npm dependency
COPY package.json .
RUN npm install --slient

# copy the front end files and compiles it public
COPY . .
RUN npm run build

EXPOSE 8080

# start the node server
CMD ["npm", "start"]
