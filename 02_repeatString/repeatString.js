const repeatString = function(word, num) {

    let output = ``;
    
    if(num === 0 || word === ``)   return output;

    for(let i = 0; i <= num-1; i++)
    {
        output+=word;
    }
    return output || "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
