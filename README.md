# Tic Tac Toe

[Deploy Link](https://megschuetz.github.io/Tic-Tac-Toe/)

## Introduction

This is an electronic version of the old classic game of tic tac toe. Users are represented by the shell and coconut emojis, used to prompt whose turn it is and to keep track of individual scores. The banner will display messages when each game ends identifying the winner or will tell if there is a draw.

## Technologies

- Javascript
- HTML
- CSS

## Features

- Each player is able to click a spot on the board and their correlating emoji will hold its place on the board.
- Spots on the board with existing emojis can not be clicked once a token is present, or once a player has won.
- The head banner leads the game prompt who's turn it is and each games outcome.

## Illustrations

![Tic Tac Toe](https://media.giphy.com/media/vZ968uVenNoCquDmzA/giphy.gif)


## Architecture

This project consists of 6 files, 3 with majority of the logic and 3 for styling. The game uses two classes, one for players and one for playing the game. A third main JS file that connects the data model to the DOM.  

## Reflections

During this project one of my biggest learnings was to do more, if not all, of the data model logic first. I added what I thought was most of the data model logic in the classes and then started connecting it to the DOM. However I had to continually go back to the data model to add more functionality, which would have been more productive to do at the beginning.   

## Set Up

1. Fork this repo
2. Clone the repo to your local machine
3. View the project in the browser by running open index.html in your terminal
