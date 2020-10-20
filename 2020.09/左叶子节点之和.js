/*
* Find the sum of all left leaves in a given binary tree.
*
* */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumOfLeftLeaves = function(root) {
	if(!root) return 0;
	if(root.left) {
		if(isLeaf(root.left)) {
			return root.left.val + sumOfLeftLeaves(root.right)
		}else {
			return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
		}
	} else {
		return sumOfLeftLeaves(root.right)
	}

};

function isLeaf(node) {
	if(!node) return false
	if(!node.left && !node.right) return true
}

