/*
* 找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3

* */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 无聊解法1
var findRepeatNumber = function(nums) {

	for (let i = 0; i < nums.length; i++) {
		if(nums.indexOf(nums[i],i+1) > 0) {
			//console.log('就你了',nums[i]);
			return nums[i];
		}
		//console.log('重复');
	}

};

var findRepeatNumber = function(nums) {
	let i = 0;
	while(i < nums.length) {
		if(nums.indexOf(nums[i],i+1) > 0) {
			return nums[i];
		} else {
			i++
		}
	}
}

// 好思路
var findRepeatNumber = function(nums) {
	let s=new Set();
	for(var i in nums){
		var curLenth=s.size;
		s.add(nums[i]);
		if(s.size==curLenth)
			return nums[i];
	}
};

// 好解法 哈希表 对象
var findRepeatNumber = function(nums) {
	const map = {};
	for (const num of nums) {
		if (!map[num]) {
			map[num] = true;
		} else {
			return num;
		}
	}
}

// 优化版解法 更优秀
var findRepeatNumber = function(nums) {
	const length = nums.length;
	for (let i = 0; i < length; ++i) {
		//检测下标为i的元素是否放在了位置i上
		while ((num = nums[i]) !== i) {
			if (num === nums[num]) {
				return num;
			}
			[nums[i], nums[num]] = [nums[num], nums[i]];
		}
	}
}




