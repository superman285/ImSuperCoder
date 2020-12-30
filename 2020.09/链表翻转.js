// 必会知识点 链表
// https://www.cnblogs.com/lixinjie/p/a-post-help-you-understanding-sinlge-linkedlist-and-never-forget.html
/*
Reverse a singly linked list.
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
* */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseList(head) {
    if (!head.val) {
        return null;
    }
    if (!head.next) {
    }
    else {
        return reverseList(head.next);
    }
}
