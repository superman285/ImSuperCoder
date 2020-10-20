

/*
* 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

注意：本题相对原题稍作改动

示例 1：
输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。

示例 3：
输入： [2,1,4,5,3,1,1,3]
输出： 12
解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/the-masseuse-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/the-masseuse-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/*** 必看理解 ***/
// https://blog.csdn.net/king101125s/article/details/105278504

// 图解 https://blog.csdn.net/qq_16664581/article/details/89598243

// https://www.cnblogs.com/yixinjishu/p/12303423.html


/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
	// DP动态规划 解法
	let dp = new Array(nums.length);
	if (nums.length === 0) {
		return 0;
	}
	if (nums.length === 1) {
		return nums[0];
	}
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);
	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
	}
	return dp[nums.length - 1];

	// 一行代码 reduce 解法

	/*状态dp最大分钟数 = [不约,约]。边界dp[0]一定不约，dp[0] = 0
	本局不约，上局可能约或不约。上局不约及约最大分钟数，取大
	本局约，上局一定不约。上局不约最大分钟数 + 本局分钟数
	* */
	// return Math.max(...nums.reduce((dp, num) => [Math.max(...dp), dp[0] + num], [0, 0]))


	/* 进阶优化空间版本
	*
	*
	  let temp = 0, b = nums[0], max;
    for (let i = 2; i <= nums.length; i++) {
        max = Math.max(temp + nums[i - 1], b);    |  Math.max(0+nums[1],nums[0]) 第一次比较
        temp = b;
        b = max;
    }
    return max;
	*
	* */
};

let nums = [1,2]

//f(0) = 0
//f(1) = 1
//f(2) = max( f(1), f(0)+nums[end])
