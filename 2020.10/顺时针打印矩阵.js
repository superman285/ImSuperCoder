/*
* 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

示例 1：
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
* [
* [1,2,3],
* [4,5,6],
* [7,8,9]
* ]
123
456
789
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
* [
* [1,2,3,4],
* [5,6,7,8],
* [9,10,11,12]
* ]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

[0][0]~[0][3] [0][3]~[2][3] [2][3]~[2][0] [2][0]~[1][0] [1][0]~[1][2]
*
*
*
*



 1  2  3  4
 5  6  7  8
 9 10 11 12
13 14 15 16

*
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[][]} matrix
 * @return {number[]}
	 1  2  3  4
	 5  6  7  8
	 9 10 11 12
[0][0]~[0][3] [0][3]~[2][3] [2][3]~[2][0] [2][0]~[1][0] [1][0]~[1][2]
 */
var spiralOrder = function(matrix) {

	let row = 0, col = 0;
	let rowMax = 4, colMax = 4;
	let ret = [];
	let flags = matrix.map(arr => arr.map(num => 0))
	while (ret.length!==matrix.length) {
		// 右 ->
		ret.push(matrix[row][col])
		col++
		// 下 ↓
		ret.push(matrix[row][col])
		row++
		// 左 <-
		ret.push(matrix[row][col])
		col--
		// 上 ↑
		ret.push(matrix[row][col])
		row--
		// 右 ->
		ret.push(matrix[row][col])
		col++
	}

};
