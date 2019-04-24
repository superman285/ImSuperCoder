/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {

    let result = [];


    for (let i = 0,length=A.length; i < length; i++) {

        let idx = A.findIndex(num=>num%2===i%2);
        result.push(A[idx]);
        A.splice(idx,1);

    }
    return result;
};

var arr = [4,2,5,7];

console.log(sortArrayByParityII(arr));