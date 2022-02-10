/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {


    let first;
    let second;
    first = second = head;
    while (first && n > 0) {
        --n;
        first = first.next;
    }
    if (!first) return head.next;
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    if (!second.next) return null;
    second.next = second.next.next;
    return head;
};

// @lc code=end

