/*
 * @lc app=leetcode.cn id=1669 lang=typescript
 *
 * [1669] 合并两个链表
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

function mergeInBetween(
    list1: ListNode | null,
    a: number,
    b: number,
    list2: ListNode | null
): ListNode | null {
    let index = 0,
        node = list1,
        pre,
        post;
    while (node) {
        if (index === a - 1) {
            pre = node;
        } else if (index === b + 1) {
            post = node;
            break;
        }
        ++index;
        node = node.next;
    }
    pre.next = list2;
    node = list2;
    while (node.next) {
        node = node.next;
    }
    node.next = post;
    return list1;
}
// @lc code=end
