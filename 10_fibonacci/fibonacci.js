const fibonacci = function(index) {
    // 1 1 2 3 5 8
    // 0 1 2 3 4 5
    let idx = parseInt(index);
    if (idx < 0) {
        return "OOPS";
    }

    if (idx == 1 || idx == 2) {
        return 1;
    }
    else if (idx == 0) {
        return 0;
    }

    let prev1 = 1;
    let prev2 = 1;
    let num = prev1 + prev2; //2

    for (let i = 2; i < idx; i++) {
        num = prev1 + prev2;

        prev1 = prev2;
        prev2 = num;
    }


    return num;
};

// Do not edit below this line
module.exports = fibonacci;
