const palindromes = function (string) {
    processedString = string.toLowerCase().replace(/[^a-z]/g, ""); //escapes any characters not eligible

    for (let i=0; i<(processedString.length)/2; i++){
        if (processedString[i] != processedString[processedString.length-1-i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;


// sort, filter, reduce, map, one