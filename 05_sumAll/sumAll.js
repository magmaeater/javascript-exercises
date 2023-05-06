const sumAll = function(n1,n2) {
    sum = 0;
    
    if(n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2))   return "ERROR";

    for(let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++)
    {
    sum+=i;
    }
    return sum || "ERROR";
};



// Do not edit below this line
module.exports = sumAll;
