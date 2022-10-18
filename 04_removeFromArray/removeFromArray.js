const removeFromArray = function(arr, indices) {
    const arrLen = arr.length;
    let numRemoved = 0; //tracks number of elements removed from arr

  
    // We take each argument after the array is given
    for (let i=1; i<arguments.length; i++){
        console.log("Assessing index [" + i + "]=" + arguments[i] + ". arr.length=" + arrLen);

        // We check that the element to remove actually is in array (in case of numeric)
        if (arguments[i] <= arrLen && arguments[i] >= 1 && Number.isInteger(arguments[i])){
            console.log("Removing index " + (arguments[i]-1-numRemoved));
            arr.splice((arguments[i]-1-numRemoved),1);
            numRemoved++;

        } else if (arr.indexOf(arguments[i]) != -1){ //case where we match item exactly
            arr.splice(arr.indexOf(arguments[i]),1);
            numRemoved++;
        } else {
            continue; //Ignore bad arguments
        } 
    }
    console.log("DONE: " + arr);
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
