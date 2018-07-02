FROM node:10-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

# install npm dependency
COPY package.json .
RUN npm install --slient

EXPOSE 8080

# copy index.js and API files
COPY . .

EXPOSE 8080

# start the node server
CMD ["npm", "start"]
