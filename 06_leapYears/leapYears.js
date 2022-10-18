const leapYears = function(year) {
    if (!(year%4)){ //If divisble by 4
        if (!(year%400)){ //if divisible by 400
            return true;
        }
        if (!(year%100)){ //if divisible by 100
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
