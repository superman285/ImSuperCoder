/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {

    
    for (let i=0,length=s.length,turns = Math.floor(s.length/2);i< turns;i++){
        [s[i],s[length-1-i]] = [s[length-1-i],s[i]];
    }

    return s;

    //反向循环
    let res = "";
    for(let i = s.length - 1; i >= 0; i --){
        res += s[i];
    }
    return res;

};

var arr = ["h","e","l","l","o"];

console.log(reverseString(arr));