/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////
// TODO 2: Implement bubbleSort
async function bubbleSort(array) {
  while (sorted = false)
   //
    for( var f = 0; f < array.length - 1; f++) { 
     //
      for (var t = array.length - 1; t < f + 1; t++) {
       //
        if (array[t].value < array[t + 1].value)  { // checks for the values in the array
         swap(array, array[t], array[t - 1]) 
         updateCounter(bubbleCounter); // updates how many moves were made?
         await sleep(); // what does this mean???
       } // if statemend end
       sorted = false;
      } // for loop 2 end [t]
    } // for loop 1 end [f]
} // function end

// TODO 3: Implement quickSort
async function quickSort(array, left, right) { // 3a & 3b

 if (right - left > 0) { // splits the array (hopefully)
  var index = await partition(array, left, right) } //3b2
 //
 if (left < index - 1) { // quicksort left
  await quickSort(array, left, index - 1) // 3b3
 }
 //
 if (index < right) { // quicksort right
  await quickSort(array, index, right) // 3b4
 }
}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right) {
  var pivot = array[Math.floor((right + left)/2)].value; // 4b
  while (left < right) { // 4c
   while (array[left].value < pivot) {
    array[left].value = array[left].value + 1 // 5a
   } // left while loop end
   //
   while (array[right].value > pivot) {
    array[right].value = array[right].value - 1 // 5b
   } // right while loop end
   //
   if (left < right) {
    swap(array, array[left], array[right]) // 5ci
    updateCounter(quickCounter) // 5cii
    await sleep() // 5ciii
   } // if statement end
  } // outer while loop end
  return left + 1; // 4d
}

// TODO 1: Implement swap
function swap(array, i, j) {
 [array[i], array[j]] = [array[i], array[j]]
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}