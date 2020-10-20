/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {

	/*let stack = [];

	let charArr = S.split('');

	for (let i = 0; i < length; i++) {
		stack.push(charArr[i] === ' ' ? '%20':charArr[i])
	}

	return stack.join('');*/

	// 正则 简洁 解法
	// return S.slice(0,length).replace(/\s/g,'%20') 或substr，更快

	// return S.substr(0, length).split(' ').join('%20')

	// 最快!!
	// return encodeURI(S.substr(0,length))

};

console.log(replaceSpaces("Mr John Smith    ", 13));
