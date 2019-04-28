/*
Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].
After this process, we have some array B.
Return the smallest possible difference between the maximum value of B and the minimum value of B.
可任意选一个数x介于 -K~K 给原数组中每个数加上这个数(不需要每个数组元素加相同的数,可加不同x) 然后得到最小差
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var smallestRangeI = function (A, K) {

    /*let min = Math.min(...A);
    let max = Math.max(...A);

    if(max-min <= K*2){
        return 0;
    }else{
        return (max-K)-(min+K);
    }*/

    //写法2
    let min = Math.min(...A) + K;
    let max = Math.max(...A) - K;

    return max <= min ? 0 : max - min;


};

let arr = [0,10];
let k = 2;

console.log(smallestRangeI(arr, k));