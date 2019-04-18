/**
 * @param {number[]} A
 * @return {number[]}
 */

/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
*/

var sortArrayByParity = function(A) {

    
    let result = [];

    A.forEach(number=>number%2?result.push(number):result.unshift(number));

    return result;

    // one line way ====(￣▽￣*)b厉害
    //A.sort((a, b) => a % 2 - b % 2); return A;

    //a和b为要进行比较的数字，a-b小于0则a会排到b前面 大的排后面
    //a%2=1则为奇数,b%2=0则为偶数 a%2-b%2大于0 即奇数排在偶数后面
    //a%2和b%2相等时则同为奇数或偶数，相减为0 这时不交换位置

    //one line way wonderful🤡
    //return [...A.filter(x=>x%2==0),...A.filter(x=>x%2==1)];
};

