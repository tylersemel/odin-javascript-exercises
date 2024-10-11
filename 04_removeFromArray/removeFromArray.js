const removeFromArray = function(numbers, ...itemsToRemove) {
    for (const item of itemsToRemove) {
        let foundIndex = numbers.indexOf(item);

        while (foundIndex != -1) {
            numbers.splice(foundIndex, 1);

            foundIndex = numbers.indexOf(item);
        }
    }

    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
