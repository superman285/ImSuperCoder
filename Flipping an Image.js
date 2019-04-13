/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipAndInvertImage = function(A) {
    return A.map(arr=>arr.reverse().map(num=>1^num))
    //or
    //return A.map(arr=>arr.reverse().map(num=>Number(!num)))
};

//ugly way
var flipAndInvertImage = function(A) {
    for (let arr of A) {
        arr.reverse();
        for(let i in arr){
            arr[i] = Number(!arr[i]);
        }
    }
    return A;
};