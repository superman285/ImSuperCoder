/*
* 给你一个整数数组 nums 。

如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

返回好数对的数目。

 

示例 1：

输入：nums = [1,2,3,1,1,3]
输出：4
解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-good-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[]} nums
 * @return {number}
 */
// [1,2,3,1,1,3]
var numIdenticalPairs = function(nums) {
	let counter = 0;
	console.log('打印');
	function find(val,index) {
		let idx = nums.indexOf(val,index);
		if(idx>0) {
			counter++;
			console.log('来',val,idx,counter);
			find(val,idx+1)
		}
	}
	nums.forEach((num,index)=>{
		find(num,index+1)
	})
	return counter
};

var numIdenticalPairs = function(nums) {
	let length = nums.length;
	let counter = 0;
	nums.forEach((num,index)=>{
		for (let i = index+1; i < length; i++) {
			nums[i] === num && counter++;
		}
	})
	return counter
};

numIdenticalPairs([1,2,3,1,1,3])
