/*
* 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

示例 :

输入:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

输出: 16

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/island-perimeter
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

	const rowLen = grid.length;
	const colLen = grid[0].length;
	let count = 0
	for (let i = 0; i < rowLen ; i++) {
		for (let j = 0; j < colLen ; j++) {
			if (grid[i][j]) {
				!(grid[i-1]||[])[j] && count++
				!grid[i][j-1] && count++
				!grid[i][j+1] && count++
				!(grid[i+1]||[])[j] && count++
			}
		}
	}
	return count

	// 更优解法是 DFS 深度优先搜索
};


console.log(111);
console.log(islandPerimeter([[0,1,0,0],
	[1,1,1,0],
	[0,1,0,0],
	[1,1,0,0]]));
