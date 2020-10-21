/*
* 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

示例 1：
输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。

示例 2：
输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/long-pressed-name
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*
* */

/**
 *
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

// 索然无味
var isLongPressedName = function(name, typed) {

	const reg = /(\S)\1+|\S/g
	const nameMatched = name.match(reg);
	const typedMatched = typed.match(reg);

	return nameMatched.length === typedMatched.length && nameMatched.every((nameChar,idx)=>typedMatched[idx].includes(nameChar))


};

// 更赞的双指针 解法 用两个指针分别 指向 两个字串的位置
/*
* 当 \textit{name}[i]=\textit{typed}[j]name[i]=typed[j] 时，说明两个字符串存在一对匹配的字符，此时将 i,ji,j 都加 11。

否则，如果 \textit{typed}[j]=\textit{typed}[j-1]typed[j]=typed[j−1]，说明存在一次长按键入，此时只将 jj 加 11。

最后，如果 i=\textit{name}.\textit{length}i=name.length，说明 \textit{name}name 的每个字符都被「匹配」了。
* */
// 精华 while循环
var isLongPressedName = function(name, typed) {

	const n = name.length, m = typed.length;
	let i = 0, j = 0;
	while (j < m) {
		if (i < n && name[i] === typed[j]) {
			i++;
			j++;
		} else if (j > 0 && typed[j] === typed[j - 1]) {
			j++;
		} else {
			return false;
		}
	}
	return i === n;
};
