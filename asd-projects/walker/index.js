/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
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
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
   }

  var projectile = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 5,
  } 
  
  // Object Variables
  var projectileReady = false

  // Settings Objects
   var $imputLog = $("#imputLog"); 
   var $showDebug = $("#showDebug");
   var $status = $("#status");

  // one-time setup
   var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
   $(document).on('keydown', handleKeyDown);  // change 'eventType' to the type of event you want to handle
   $(document).on('keyup', handleKeyUp);  // change 'eventType' to the type of event you want to handle
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////// CORE LOGIC ///////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function newFrame() {
    repositionGameItem(walker);
    wallColision(walker);
    redrawGameItem(walker);
  }
  
  /* 
  Called in response to events.
  */
  
  // $("#debugToggle").on("click", toggleStatusBox());

  function handleKeyDown(event) {
    $("#walkerCordinates").text("Current Cordinates: " + walker.positionX + ", " + walker.positionY);
    //
    if (event.which === KEY.ENTER) {
      $imputLog.text("Imput: Enter Key");
      console.log("Enter Key pressed");
      toggleStatusBox(); // Turns off and on the Debug Box
    }
    //
    if (event.which === KEY.SPACEBAR) {
      $imputLog.text("Imput: Space Bar");
      console.log("Space Bar pressed");
    }
    //
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
      $imputLog.text("Imput: Left Arrow Key");
      console.log("Left Arrow pressed");
    }
    //
    if (event.which === KEY.UP) {
      walker.speedY = -5;
      $imputLog.text("Imput: Up Arrow Key");
      console.log("Up Arrow pressed");
    }
    //
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
      $imputLog.text("Imput: Right Arrow Key");
      console.log("Right Arrow pressed");
    }
    //
    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
      $imputLog.text("Imput: Down Arrow Key");
      console.log("Down Arrow pressed");
    }
    //
    console.log(event.which)
  }
 //
   function handleKeyUp(event) {
     if (event.which === KEY.SPACEBAR) {
      console.log("Spacebar Lifted");
    }
    //
    if (event.which === KEY.ENTER) {
      console.log("Enter Key Lifted");
    }
    //
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
      console.log("Left Arrow Lifted");
    }
    //
    if (event.which === KEY.UP) {
      walker.speedY = 0;
      console.log("Up Arrow Lifted");
    }
    //
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
      console.log("Right Arrow Lifted");
    }
    //
    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
      console.log("Down Arrow Lifted");
    }
   }

  ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// HELPER FUNCTIONS ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function toggleStatusBox() {
    if ($showDebug = "Show Debug?: True") {
     $showDebug = "Show Debug?: False";
     $("#status").hide();
    }
   //
    else if ($showDebug = "Show Debug?: False") {
      $showDebug = "Show Debug?: True"
      $("#status").show();
    }
  }
  //
  function repositionGameItem(object) {
     object.positionX += object.speedX; // update the position of the walker along the x-axis
     object.positionY += object.speedY; // update the position of the walker along the y-axis
    }
   //
  function redrawGameItem(object) {
    if (object = walker) {
    $("#walker").css("left", walker.positionX); // draw the walker in the new location, positionX pixels away from the "left"
    $("#walker").css("top", walker.positionY); // draw the walker in the new location, positionY pixels away from the "top"
    } 
    //
    else if (object = projectile) {
      $("#projectile").css("left", projectile.positionX);
      $("#projectile").css("top", projectile.positionY);
    }

  }
 //
  function wallColision(object) {
    if (object.positionX >= $("#board").width() - 50) { // Border for the Right Wall
        // object.positionX = object.positionX - object.speedX - 15
         object.speedX = 0 // Stops the Box from Moving
         object.positionX = $("#board").width() - 50 // Stops the box from getting out of the border
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
   }
  //
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
 //  
}
