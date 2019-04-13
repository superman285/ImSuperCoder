/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

//wrong
var deleteNode = function(list,node) {

    new Set(list).delete(node);

};

//correct
//每个节点两个属性，next指向和val值
var deleteNode = function(node) {

    node.val = node.next.val;
    node.next = node.next.next;

    //or
    //Object.assign(node, node.next);

};


