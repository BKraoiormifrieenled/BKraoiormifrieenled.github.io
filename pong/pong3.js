var FRAME_RATE = 60;
var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

const KEY = {
  "ENTER": 13,
  "SPACEBAR": 32,
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40,
 }

// Game Item Objects
var ball = {
  defaultX: 0,
  defaultY: 0,
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0,
 }

 var paddle1 = { // paddles can only move up and down
    defaultX: 0,
    defaultY: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
   }

 var paddle2 = {
    defaultX: 0,
    defaultY: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
   }