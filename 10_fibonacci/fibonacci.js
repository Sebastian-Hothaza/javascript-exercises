const fibonacci = function(num) {
    if (num <= 0) return "OOPS";

    let root = 1;
    let prev = 1;
    let current;

    if (num == 1 || num == 2) return root;

    // current corresponds to the ith fibonacci number
    for (let i=3; i<=num; i++){
        current = root + prev; //
        root = prev;
        prev = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
