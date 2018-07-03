# Server
This is a Node server. All the requsts starts with `/sudoku` shall be directed to this web service.

## How to start
This commands builds the containers with a `tag` 'server' and does not use cache when building.
```
$ docker build -t server . --no-cache
```
You can start backend service part of the application with:
```
$ docker run -p 8080:8080 server
```
Since the `Dockerfile` exposes the `8080` port in container, we need to connect it with our host ports. You can change it to whatever port you want in the `<Host port>:8080`.

Press `ctrl` + `c` to shutdown the container.

## Unit tests
The units tests are composed of
1. Mocha (Testing framework)
1. Chai (Asserton library)
1. Supertest (HTTP assertion utility)

## Routes
1. `/sudoku/board`: Get request. This generates a solved sudoku board as an array with length 81.
1. `/sudoku/board/fixed`: Get request. This generates a solved sudoku board as an array with length 81 that has **a cell fixed** with a value provided in the querystring. Here are the expected querystrings:
    1. value
    1. row
    1. col

## Logic
The way this web service generates a solved sudoku board is to start with a simple and **solved** solution. To generate a radnomized solution. First, it swappes rows and cols within the chunk of the rows or cols (Every 3 rows/cols is a chunk). And then, it swappes number x with number y to randomize the solution. This is how it can generate a randomized solution everytime.
