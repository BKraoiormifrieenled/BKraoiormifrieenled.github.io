// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  // applyFilter(reddify) // TODO 1b & 4b
  // applyFilter(decreaseBlue) // TODO 6a
  // applyFilter(increaseGreenByBlue) // TODO 6b

  // The following 2 causes the program to crash //
     applyFilterNoBackground(decreaseBlue) // TODO 7
  // applyFilterNoBackground(increaseGreenByBlue) // TODO 7

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  //
  for (var i = 0; i < image.length; i++){
    for (var j = 0; j < image[i].length; j++ ){
     var rgbString = image[i][j] // 2a
     var rgbNumbers =  rgbStringToArray(rgbString) // 2b
     // rgbNumbers[RED] = 255 // 2c 
     // console.log(rgbNumbers)
     filterFunction(rgbNumbers) // 4c
     rgbString = rgbArrayToString(rgbNumbers) // 2d
     image[i][j] = rgbString // 2e
    } // 2nd forLoop end
  }// first forLoop end
} // applyFilter Function End

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
   var bgColor = image[0][0] // 7b

  for (var r = 0; r < image.length; r++){ // 7a
    for (var c = 0; c < image[r].length; c++ ){
      var rgbString = image[r][c] // 2a
   
    if (rgbString !== bgColor) {
     // Apply filter
     var rgbNumbers =  rgbStringToArray(rgbString) // 2b
     filterFunction(rgbNumbers) // 4c
     rgbString = rgbArrayToString(rgbNumbers) // 2d       
     image[r][c] = bgColor // 2e
    }
    //
      image[r][c] = bgColor // Don't apply filter
    } // 2nd forLoop end
  }// first forLoop end
} // applyFilterNoBackground Function End

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
//  if (num < 0 ) {return 0}
//  else if (num > 225) {return 225}
//  else {return num}

var resultA = num < 0 ? 0 : num  // 5i
return resultA > 255 ? 255 : resultA

} // keepInBounds Function End

// TODO 3: Create reddify function
// makes stuff blue
function reddify(array) {
  array[RED] = 200 
  } 

// TODO 6: Create more filter functions

function decreaseBlue(array) { // 6a
  var valueA = array[BLUE] - 50
  array[BLUE] = keepInBounds(valueA)
  }// decreaseBlue Function End

// makes stuff green
function increaseGreenByBlue(array) { 
  var valueB = array[GREEN] + array[BLUE]
  array[GREEN] = keepInBounds(valueB)
  } // increaseGreenByBlue Function End

// CHALLENGE code goes below here
