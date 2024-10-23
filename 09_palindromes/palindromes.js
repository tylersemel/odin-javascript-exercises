const palindromes = function (word) {
    let str = "";
    let reverse = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== " " &&
            ((word[i].toLowerCase() >= "a" && word[i].toLowerCase() <= "z") ||
            (word[i] >= 0 && word[i].toLowerCase() <= 9))) {
            str += word[i];
        }
    }

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (str.toLowerCase() !== reverse.toLowerCase()) {
        return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
