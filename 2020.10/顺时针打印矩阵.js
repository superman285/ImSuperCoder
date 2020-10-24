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

// 题解: https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/shou-hui-tu-jie-liang-chong-bian-li-de-ce-lue-na-c/


// 思路对了 但是判断方式没想出来 搞那么复杂。

// 不要钻牛角 逆向思维一下  https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/bo-yang-cong-yi-ceng-yi-ceng-cong-ju-zhen-zhong-bo/

/*
* 1 2 3 4 5
* 4 3 2 1 6
* 1 2 3 4 7
* 4 3 2 1 8
* 1 2 3 4 9
*
* */
/**
 * @param {number[][]} matrix
 * @return {number[]}
	 1  2  3  4
	 5  6  7  8
	 9 10 11 12
  13 14 15 16
[0][0]~[0][3] [0][3]~[2][3] [2][3]~[2][0] [2][0]~[1][0] [1][0]~[1][2]
 */
let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
var spiralOrder = function (matrix2) {
	let row = 0, col = 0;
	const rowMax = 4
	const colMax = 4
	let ret = [];
	let rowsFlag = 0, colsFlag = 0;
	function walk(startRow = 0, startCol = 0, rowMax, colMax) {
		// 0  1  2
		for (let col = startCol; col < (colMax - colsFlag) + startCol; col++) {
			// console.log('col ',col,matrix[rowsFlag][col]);
			ret.push(matrix[rowsFlag - startCol][col])
		}
		rowsFlag++
		startRow++
		// 1
		//for (let row = startRow; row < rowMax - (rowsFlag - 1); row++) {
		for (let row = startRow; row < rowMax - (rowsFlag - startRow); row++) {
			// console.log('row',startRow,colMax-1-colsFlag);
			ret.push(matrix[row][colMax - 1 - colsFlag/2])
		}
		colsFlag++
		startCol = (colMax - 1) - colsFlag + Math.floor(colsFlag/2)
		// 改
		console.log('startCol',startCol,colsFlag - 1);
		for (let col = startCol; col >= (colsFlag - 1) /* ？- (colMax - startCol)*/; col--) {
			console.log('看 rowsFlag,col',rowsFlag,col,matrix[rowMax-rowsFlag][col]);
			ret.push(matrix[rowMax-rowsFlag][col])
		}
		startRow = (rowMax - 1) - rowsFlag
		rowsFlag++
		// 1
		for (let row = startRow; row >= (rowsFlag - 1); row--) {
			ret.push(matrix[row][colsFlag - 1])
		}
		startCol = (colsFlag - 1) + 1
		colsFlag++

		console.log('ret',ret, ret.length, matrix.flat(Infinity).length);

		if (ret.length !== matrix.flat(Infinity).length) {
			console.log('递归');
			console.log(startRow,startCol,rowMax,colMax,rowsFlag,colsFlag);
			// walk(startRow,startCol,rowMax,colMax)
		}

	}

	walk(0,0,4,4)
	walk(1,1,4,4)
	/*while (ret.length !== matrix.length) {
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
	}*/

};

spiralOrder(matrix)
