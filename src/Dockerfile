FROM node:9.4.0-alpine

RUN mkdir /usr/app
WORKDIR /usr/app

# install npm dependency
COPY package*.json .
RUN npm install --slient

# copy the front end files and compiles it public
COPY . .
RUN npm run build

# start the node server
CMD ["npm", "start"]
