/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

import { ListNode } from './common';

// @lc code=start
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

function swapPairs(head: ListNode | null): ListNode | null {
    let ppre: ListNode | null,
        pre: ListNode | null,
        cur: ListNode | null = head,
        newHead;
    while (cur) {
        if (pre) {
            const next = cur.next;
            cur.next = pre;
            pre.next = next;
            if (ppre) {
                ppre.next = cur;
            }
            ppre = pre;
            pre = null;
            if (!newHead) newHead = cur;
            cur = next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    return newHead || head;
}
// @lc code=end
