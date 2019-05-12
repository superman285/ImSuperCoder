/**
 * @param {string} s
 * @return {number}
 */

/*
*   A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...*/

var titleToNumber = function(s) {


    let length = s.length - 1;
    
    return [...s].reduce((acc,cur,idx)=>{
        return acc + 26**(length-idx)*(cur.charCodeAt(0)-64);
    },0)





};


var str = "ABC";

console.log(titleToNumber(str));