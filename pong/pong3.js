$(document).ready(runProgram);

function runProgram() {

  // Framerate Control //

var FRAME_RATE = 60;
var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
$(document).on('keydown', handleKeyDown);  // change 'eventType' to the type of event you want to handle
$(document).on('keyup', handleKeyUp);  // change 'eventType' to the type of event you want to handle

function newFrame() {
  wallColision(ball)
  wallColision(paddle1)
  wallColision(paddle2)
  moveObject(paddle1)
  moveObjevt(paddle2)
}

// Miscellanious jQuery Variables//
var $imputLog = $("#imputLog"); 
var $imputLog2 = $("#imputLog2"); 
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

 function handleKeyDown(event) { // Responds when any of the buttons are pressed
//  $("#walkerCordinates").text("Current Cordinates: " + walker.positionX + ", " + walker.positionY);
//  $("#projectileCordinates").text("Projectile Cordinates: " + projectile.positionX + ", " + projectile.positionY);
  //
  //
 if (event.which === KEY.ENTER) {
    $imputLog.text("Imput: Enter Key"); // Tells the Player what key was pressed
    console.log("Enter Key pressed"); // Console.logs it for good measure
    return KEY.ENTER // allows the handleKeyDown function to be used as a variable
  }
  //
  if (event.which === KEY.SPACEBAR) {
    $imputLog.text("Imput: Space Bar");
    console.log("Space Bar pressed");
    return KEY.SPACEBAR 
  }
  //
  if (event.which === KEY.UP) {
    $imputLog.text("Imput (" + paddle1.name + "): Up Arrow Key");
    console.log("Up Arrow pressed");
    return KEY.UP
    moveObject(paddle1, KEY.UP);
  }
  //
  if (event.which === KEY.DOWN) {
    $imputLog.text("Imput (" + paddle1.name + "): Down Arrow Key");
    console.log("Down Arrow pressed");
    return KEY.DOWN
  }
  //
  if (event.which === KEY.W) {
    $imputLog2.text("Imput (" + paddle2.name + "): W Key")
    console.log("W pressed");
    return KEY.W
  }
  //
  if (event.which === KEY.S) {
    $imputLog2.text("Imput (" + paddle2.name+ "): S Key");
    console.log("S pressed");
    return KEY.S
  }
}
//
 function handleKeyUp(event) { // Responds after the buttons are let go (after being pressed)
   if (event.which === KEY.SPACEBAR) {
    console.log("Spacebar Lifted");
  }
  //
  if (event.which === KEY.ENTER) {
    console.log("Enter Key Lifted");
  }
  //
  if (event.which === KEY.UP) {
    console.log("Up Arrow Lifted");
    walker.speedY = 0;
  }
  //
  if (event.which === KEY.DOWN) {
    console.log("Down Arrow Lifted");
    walker.speedY = 0;
  }
  if (event.which === KEY.W) {
    console.log("W Key Lifted");
    walker.speedY = 0;
  }
  //
  if (event.which === KEY.S) {
    console.log("S Key Lifted");
    walker.speedY = 0;
  }
 }

// Object Management //

function addObject(object, id, x, y, speedX, speedY) { // Helper function to create new objects
  var object = { }
  object.id = id
  object.defaultX = 0
  object.defaultY = 0
  object.x = x
  object.y = y
  object.speedX = speedX
  object.speedY = speedY
}

function modifyObject(objectID, modification, value) { // Helper function to modify objects using jQuery
   objectID.modification = value
   console.log("Set "  + modification + "to " + value)

   if (modification = addText) { $objectID.text(value); }
   if (modification = "top") { $objectID.css("top", value) }
   if (modification = "left") { $objectID.css("left", value) }
   if (modification = "background-color") { $objectID.css("background-color", value) }
   if (modification = "color") { $objectID.css("color", value)  }
} // note that, the parameters must be written in quotes //

// Game Item Objects //
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

 // Object Logic //
 
 function wallColision(object, value) { // (From the walker project)

  if (value = "stop") {
  if (object.positionX >= $("#board").width() - 50) { // Border for the Right Wall
      // object.positionX = object.positionX - object.speedX - 15
       object.speedX = 0 // Stops the Box from Moving
       object.positionX = $("#board").width() - 50 // Stops the object from getting out of the border
   }
  //
  if (object.positionX <= 0) { // Border for the Left Wall
    // object.positionX = object.positionX - object.speedX + 15
     object.speedX = 0 
     object.positionX = 0 
   }
  //
  if (object.positionY >= $("#board").height() - 50) { // Border for the Bottom Wall
      // object.positionY = object.positionY - object.speedY - 15
      object.speedY = 0;
      object.positionY = $("#board").width() - 50
   }
  //
   if (object.positionY <= 0) { // Border for the Bottom Wall
    // object.positionY = object.positionY - object.speedY + 15
    object.speedY = 0
    object.positionY = 0
   }
   console.log(object + " has hit a wall and stopped")
  }
  if (value = "bounce") {
    if (object.positionX >= $("#board").width() - 50) { // Border for the Right Wall
      // object.positionX = object.positionX - object.speedX - 15
      object.positionX = $("#board").width() - 50 // Stops the object from getting out of the border
      object.speedX = -object.speedX // Reverses the object's movement
   }
  //
  if (object.positionX <= 0) { // Border for the Left Wall
    // object.positionX = object.positionX - object.speedX + 15
    object.positionX = 0  
    object.speedX = -object.speedX
   }
  //
  if (object.positionY >= $("#board").height() - 50) { // Border for the Bottom Wall
    // object.positionY = object.positionY - object.speedY - 15
    object.positionY = $("#board").width() - 50
    object.speedY = -object.speedX;
   }
  //
   if (object.positionY <= 0) { // Border for the Bottom Wall
    // object.positionY = object.positionY - object.speedY + 15
    object.positionY = 0
    object.speedY = -object.speedX
   }
   console.log(object + "has hit a wall and bounced.")
  }

 }
//
 function moveObject(object, keyPress) {
   if (object === paddle1 || object === paddle2) { // Checks to see if the object beig moved is one of the paddles
     if (keyPress === KEY.W || keyPress === KEY.UP || keyPress === KEY.S || keyPress === KEY.DOWN) { // Checks for the imput
     object.y += object.speedY; // update the position of the object along the y-axis
     $(object.id).css("top", object.y); } // draw the object in the new location
   }
   } 
}\

