/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(num=>num**2).sort((a,b)=>a-b)
    //or
    //return A.map(num=>Math.pow(num,2)).sort((a,b)=>a-b)
};


var arr = [-3,-2,1,3,4,6];

console.log(sortedSquares(arr));