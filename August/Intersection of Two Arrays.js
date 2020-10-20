/*
* Given two arrays, write a function to compute their intersection.
* */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {


    let {minArr,maxArr} = nums1.length < nums2.length ? {minArr:nums1,maxArr:nums2} : {minArr:nums2,maxArr:nums1};
    let resultArr = [];
    minArr.forEach(num=>{
        maxArr.includes(num) && resultArr.push(num)
    });

    return [...(new Set(resultArr))];
};

console.log(intersection([1,2,123,1,2124,124],[2,124,125,124,123,1,3,5,2,2,2,1]));
