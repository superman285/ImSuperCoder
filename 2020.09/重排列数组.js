/*
* 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

 

示例 1：

输入：nums = [2,5,1,3,4,7], n = 3
输出：[2,3,5,4,1,7]
解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shuffle-the-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*
* */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
	let newArr = [];
	for (let i = 0; i < n; i++) {
		newArr.push(nums[i])
		newArr.push(nums[n+i])
	}
	return newArr
};

var shuffle = function(nums, n) {
	let newArr = Array(2n).fill();
	for (let i = 0; i < n; i++) {
		newArr[i*2] = nums[i];
		newArr[i*2+1] = nums[n+i]
	}
	return newArr
};
