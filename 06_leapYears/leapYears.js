const leapYears = function(year) {
    //if can be / 4 and is not / 100 unless / 400
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
