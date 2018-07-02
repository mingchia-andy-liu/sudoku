# This is a take home project with BSM

This repo is a sudoku generator.

## Tech stack
1. Docker
1. React + Redux + Jest
1. NodeJS + Express
1. NGINX

## How to run
To run the application, you need to install `Docker`. Here is a [link](https://docs.docker.com/install/) from the offical docs. Once you have installed it, it should create symlinks for `docker` and `docker-compose` commands.

You can run this command to check if you have install the latest version correctly.
```
$ docker --version
```
Now, you can run this command to build application
```
$ docker-compose build
```
This command to run/start the application
```
$ docker-compose up
```

Once you are finished, you can press `ctrl` + `c` to shutdown docker containers.
And run this command to remove stopped service containers
```
$ docker-compose rm
```

## Directory Structure
### root
Root folder has `docker-compose` which is a tool for defining and running multi-container Docker application. This app has 3 containers: nginx, server, and client. Docker is choosen because is easy to use and does not require a lot of memory space like VMs.

### nginx
NGINX folder contains all the files needed for the NGINX container to run. [Read more about it here](nginx/README.md).

### server
Server folder contains all the API server files. This containers acts like a API contains which separate from the UI and assets. [Read more about it here](server/README.md).

### src
Src folder has all the client logic which includes JS, HTML, and assets. [Read more about it here](src/README.md).
