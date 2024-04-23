var canvas = []
const SQUARESIZE = 20

/* function createCanvas(id, height, width) {
  height = prompt("Enter Canvas Height:")
  width = prompt("Enter Canvas Width:")

for (var r = 0; r = height; r++) {
 for (var c = 0; c = width; c++) {
    $("<div>").appendTo(id)
    .addClass("square")
    .css('left', c * SQUARESIZE)
    .css('top', r * SQUARESIZE)
    .css('background-color', color)
    }
 } // seccond for loop end [c]
} // first for loop end [r] */

// Runs as soon as the page loads
$(document).ready(function () {
    render($("#display"), image);
   // $("#apply").on("click", );
   // $("#erase").on("click", );
  });