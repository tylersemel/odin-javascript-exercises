const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number" ||
        Math.floor(start) != start || Math.floor(end) != end ||
        start < 0 || end < 0 ) {
        return "ERROR";
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
