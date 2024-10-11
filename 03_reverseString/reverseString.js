// const reverseString = function(string) {
//     let reversedString = "";

//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedString += string[i];
//     }

//     return reversedString;
// };

const reverseString = function(string) {
    let reversed = string.split('');
    reversed.reverse();
    string = "";

    for (const letter of reversed) {
        string += letter;
    }

    //or just do return string.split('').reverse().join('');

    return string;
};

// Do not edit below this line
module.exports = reverseString;
