/*
* 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/backspace-string-compare
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var backspaceCompare = function (S, T) {

	return play(S) === play(T)
};

/**
 *
 * @param {string} str
 */
function play(str) {
	let ret;

	function rewrite(str) {
		ret = str;
		console.log('ret', ret);
		if (str.includes('#')) {
			// 匹配0到1次
			ret = str.replace(/(\S)?#/, '')
			console.log('ret2', ret);
			rewrite(ret);
		}
		console.log('ret3', ret);
		return ret;
	}
	return rewrite(str)
}

// 思路2 借助栈
var backspaceCompare = function(S, T) {
	const arrS = [], arrT = [];
	for(let char of S){
		char === '#' ? arrS.pop() : arrS.push(char);
	}
	for(let char of T){
		char === '#' ? arrT.pop() : arrT.push(char);
	}
	return arrS.join('') === arrT.join('');
};


// 综合效率最佳解法 借助指针
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
	let i = S.length - 1, j = T.length - 1
	let sc = 0, tc = 0
	while (i >= 0 || j >= 0) {
		while( S[i] === '#' ) sc++, i--
		while( T[j] === '#' ) tc++, j--

		while ( sc && S[i] !== '#') sc--, i--
		while ( tc && T[j] !== '#') tc--, j--

		if ( S[i] !== '#' && T[j] !== '#' ) {  // 当两个都不是 #
			if( S[i] !== T[j] ) return false
			i--
			j--
		}
	}
	return true
};
