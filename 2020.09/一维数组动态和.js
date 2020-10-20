/*
* 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

请返回 nums 的动态和。

 

示例 1：

输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/running-sum-of-1d-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	let sums = [];
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		sums.push(sum)
	}
	return sums;
};

// 不用多开辟一个新数组空间
var runningSum = function(nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		nums[i] = sum;
		console.log('nums',nums);
	}
	console.log('最终nums',nums);
	return nums;
};

runningSum([1,2,3,4])
