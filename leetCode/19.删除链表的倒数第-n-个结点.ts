/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// import { ListNode } from './common';

// Definition for singly-linked list.

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     const table = [];

//     let node = head;
//     let i = 0;
//     while (node) {
//         table[i] = node;
//         ++i;
//         node = node.next;
//     }
//     if (i === n) {
//         return head!.next;
//     } else {
//         if (table[i - n - 1]) {
//             table[i - n - 1].next = table[i - n - 1].next!.next;
//         }
//     }
//     return head;
// }

//快慢指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast = head;
    let slow = head;
    while (fast && n--) {
        fast = fast.next;
    }
    if (!fast) return head.next;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}
// @lc code=end
