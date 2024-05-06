$(document).ready(runPong);

function runPong() {
console.log("Program [PONG] Starting...")  

// Framerate Control //

var FRAME_RATE = 60;
var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame, (60 Frames per second)
$(document).on('keydown', handleKeyDown); // allows the document to handle key up and key down
$(document).on('keyup', handleKeyUp); 

function newFrame() {} // commands that run each frame (60 times a seccond)

//////////////////////////////////////////////////////////////

function handleKeyDown(event) { // Responds when any of the buttons are pressed
  //  $p1XY.text("P1: " + paddle1.x + ", " + paddle1.y)
    if (event.which === KEY.UP) {
      $imput1.text("Imput: Up Arrow Key");
      console.log("Up Arrow pressed");
      paddle1.speedY = -5;
    }
    //
    if (event.which === KEY.DOWN) {
      $imput1.text("Imput: Down Arrow Key");
      console.log("Down Arrow pressed");
      paddle1.speedY = 5;
    }
    //
    if (event.which === KEY.W) {
      $imput2.text("Imput: W Key")
      console.log("W pressed");
      paddle1.speedY = -5;
    }
    //
    if (event.which === KEY.S) {
      $imput2.text("Imput: S Key");
      console.log("S pressed");
      paddle1.speedY = 5;
    }
  }
  //
   function handleKeyUp(event) { // Responds after the buttons are let go (after being pressed)
    if (event.which === KEY.UP) {
      console.log("Up Arrow Lifted");
      paddle1.speedY = 0;
    }
    //
    if (event.which === KEY.DOWN) {
      console.log("Down Arrow Lifted");
      paddle1.speedY = 0;
    }
    if (event.which === KEY.W) {
      console.log("W Key Lifted");
      paddle2.speedY = 0;
    }
    //
    if (event.which === KEY.S) {
      console.log("S Key Lifted");
      paddle2.speedY = 0;
    }
   }

//////////////////////////////////////////////////////////////

// Miscellanious jQuery Variables//
var $imput1 = $("#imput1"); 
var $imput2 = $("#imput2"); 
var $p1XY = $("cordinates1");
var $p2XY = $("cordinates2");
var $board = $("#board"); 
var $debugMenu = $("#debug");

// Handle Keyboard Functions //
const KEY = {
  "ENTER": 13,
  "SPACEBAR": 32,
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40,
  //
  "A": 65,
  "W": 87,
  "D":68,
  "S": 83,
 }
//
var ball = {
    id: "#ball",
    defaultX: 205, // all defaultX & default Y must match initial CSS
    defaultY: 200,
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
    }
  
var paddle1 = { // paddles can only move up and down
    name: "Player1",
    id: "#paddle1",
    defaultX: 10,
    defaultY: 140,
    x: 10,
    y: 40,
    speedX: 0,
    speedY: 0,
    }
  
var paddle2 = {
    name: "Player2",
    id: "#paddle2",
    defaultX: 410,
    defaultY: 40,
    x: 410,
    y: 40,
    speedX: 0,
    speedY: 0,
  }

} // run program end