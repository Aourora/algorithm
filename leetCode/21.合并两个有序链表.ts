/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

//递归

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (!list1 || !list2) return list1 || list2;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
}

// @lc code=end
