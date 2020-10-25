/*
* 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。

示例 1：

输入：num = 14
输出：6
解释：
步骤 1) 14 是偶数，除以 2 得到 7 。
步骤 2） 7 是奇数，减 1 得到 6 。
步骤 3） 6 是偶数，除以 2 得到 3 。
步骤 4） 3 是奇数，减 1 得到 2 。
步骤 5） 2 是偶数，除以 2 得到 1 。
步骤 6） 1 是奇数，减 1 得到 0 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {

	/*while (res) {
		res = res%2 === 0 ? res / 2 : res - 1
		count++
	}
	return count
	*/
	let c = 0
	function walk(n=num) {
		if (n) {
			n = n%2 === 0 ? n / 2 : n - 1
			console.log('n', n);
			c+=1
			console.log('c', c);
			walk(n)
		}
		return c
	}
	return walk(num,0)
};

console.log(numberOfSteps(14))
