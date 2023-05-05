const reverseString = function(word) {
    return word.split(/(?!$)/u).reverse().join(``);
};

// Do not edit below this line
module.exports = reverseString;
