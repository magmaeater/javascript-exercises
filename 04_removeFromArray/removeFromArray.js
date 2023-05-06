const removeFromArray = function(arr, ...nums) {
    let newarr = [];
    
    for(let e of nums)
    {
        for(let i = 0; i < arr.length; i++)
        {
            if(e === arr[i])
            {
                arr.splice(i,1);
            }
        }
    }
   
    return arr;

};
console.log(removeFromArray([1,2,3,4],3,2));

// Do not edit below this line
module.exports = removeFromArray;
