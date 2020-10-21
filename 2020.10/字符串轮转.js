/*
* 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

示例1:
 输入：s1 = "waterbottle", s2 = "erbottlewat"
 输出：True

示例2:
 输入：s1 = "aa", s2 = "aba"
 输出：False
* */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 一般解法
var isFlipedString = function (s1, s2) {

	if(s1 === s2) return true
	const len = s1.length;
	for (let i = 1; i < len; i++) {
		let rotated = `${s1.substr(i)}${s1.substr(0, i)}`
		if (s2 === rotated) {
			return true
		}
	}
	return false
};

// 🍬 神奇思路 🍬 将s1 重复一次 判断
var isFlipedString = function(s1, s2) {
	return s1.length===s2.length?s1.repeat(2).includes(s2):false
}

isFlipedString('waterbottle', 'erbottlewat')
