const getTheTitles = function(arr) {
    let result = arr.map(obj => obj.title); // THIS DOES NOT MODIFY ORIGINAL ARRAY
    console.log(arr);
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
