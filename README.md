# This is a take home project with BSM

This repo is a sudoku generator.

## Tech stack
1. Docker
1. React + Redux + Jest
1. NodeJS + Express + Mocha
1. NGINX

## How to run
For level 1 & 2 & 3: The application is structured to run with `Docker`. So you need to install `Docker` and `Docker-compose` first. [Here is a link](https://docs.docker.com/install/) from the offical docs. Once you have installed it, start the application. It should create symlinks for `docker` and `docker-compose` commands. See the [install docker-compose](https://docs.docker.com/compose/install/) section if you are missing `docker-compose`.

You can run this command to check if you have install the latest version correctly.
```
$ docker --version
```
```
$ docker-compose --version
```

For level 1, go into the `./server` folder and follow the instructions there to start the server only.

For level 2 & 3: Since the project separate SPA and web service, you need to follows instrcutions to start all of them together.

You need to run this command to build application. This will start up the containers. Run the build commands for each container including installing dependency, running unit tests.
```
$ docker-compose build --no-cache
```
This command to run/start the application
```
$ docker-compose up
```

Once you are finished, you can press `ctrl` + `c` to gracefully shutdown docker containers.
And run this command to remove stopped service containers
```
$ docker-compose rm
```

## Directory Structure
### root
Root folder has a `docker-compose.yml` file which used by `docker-compose`, a tool for defining and running multi-container Docker application. This app has 3 containers: nginx, server, and client. Docker was chosen because is easy to use and memory requirement is lightweight.

### nginx
NGINX folder contains all the files needed for the NGINX container to run. [Read more about it here](nginx/README.md).

### server
Server folder contains all the API server files. This container acts like a API contains which separate from the UI and assets. [Read more about it here](server/README.md).

### src
Src folder has all the client logic which includes JS, HTML, and assets. [Read more about it here](src/README.md).
