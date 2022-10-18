const reverseString = function(str) {
    let strArr = str.split("");
    let strArrReversed = strArr.reverse();
    let resultStr = strArrReversed.join("");
    console.log(resultStr);
    return resultStr;
};

// Do not edit below this line
module.exports = reverseString;
