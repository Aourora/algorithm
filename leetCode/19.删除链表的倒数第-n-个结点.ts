/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

import { ListNode } from './common';

// Definition for singly-linked list.

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const table = [];

    let node = head;
    let i = 0;
    while (node) {
        table[i] = node;
        ++i;
        node = node.next;
    }
    if (i === n) {
        return head!.next;
    } else {
        if (table[i - n - 1]) {
            table[i - n - 1].next = table[i - n - 1].next!.next;
        }
    }
    return head;
}

//快慢指针
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let first = head;
//     let second = head;
//     while (first && n > 0) {
//         --n;
//         first = first.next;
//     }
//     if (!first) {
//         return head!.next;
//     }
//     while (first?.next) {
//         first = first.next;
//         second = second!.next;
//     }
//     second!.next = second!.next!.next;
//     return head;
// }
// @lc code=end
