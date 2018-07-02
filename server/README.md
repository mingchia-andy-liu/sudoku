# Server
This is a NodeJS server + Express for the HTTP requests. All the requsts starts with `/sudoku` shall be directed to this web service.

## How to start
You can start backend service part of the application with
```
$ npm start
```

## Routes
1. `/sudoku/board`: Get request. This generates a solved sudoku board as an array with length 81.
1. `/sudoku/board/fixed`: Get request. This generates a solved sudoku board as an array with length with a cell fixed with a value provided in the querystring. Here are the expected querystrings:
    1. value
    1. row
    1. col

## Logic
The way this web service generates a solved sudoku board is to start with a simple and **solved** solution. To generate a radnomized solution. First, it swappes rows and cols within the chunk of the rows or cols (Every 3 rows/cols is a chunk). And then, it swappes number x with number y to randomize the solution. Hence, it can generate a randomized solution everytime.
