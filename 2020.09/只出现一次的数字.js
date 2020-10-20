/*
* Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */


/**
 * @param {number[]} nums
 * @return {number}
 */

// 第二快
var singleNumber = function(nums) {
	return nums.find(num=>nums.indexOf(num)===nums.lastIndexOf(num))
};

// 最快
var singleNumber = function(nums) {
	return nums.sort().find((num,idx)=>(nums[idx-1]!==nums[idx]&&nums[idx]!==nums[idx+1]))
};

// 最慢
var singleNumber = function(nums) {
	return nums.find(num=>nums.filter(filNum=>num===filNum).length===1)
};
