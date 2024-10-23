const palindromes = function (word) {
    const alphanumeral = "abcdefghijklmnopqrstuvwxyz0123456789";

    //want to convert string to array
    //want to then filter the word so that it contains only correct characters
    //then turn that string back into an array

    let str = word
                .split('')
                .filter(char => alphanumeral.includes(char.toLowerCase()))
                .join('');

    let reverse = str
                    .split('')
                    .reverse('')
                    .join('');

    
    return reverse.toLowerCase() === str.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
