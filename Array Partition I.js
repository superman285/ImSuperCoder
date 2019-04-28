/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0;
    nums.sort((a,b)=>a-b);

    for(let i=0,length=nums.length;i<length;i++){
        result += Math.min(nums[i],nums[i+1]);
        i++;
    }
    return result;
};

let arr = [1,9,5,6];

console.log(arrayPairSum(arr));