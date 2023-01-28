/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const getNode = (val: number): ListNode => {
        let index = -1;
        let min = Infinity;
        for (let i = 0; i < lists.length; ++i) {
            if (lists[i].val === val) {
                index = i;
                break;
            } else if (lists[i].val < min) {
                min = lists[i].val;
                index = i;
            }
        }
        const result = lists[index];
        lists[index] = lists[index].next;
        if (!lists[index]) {
            lists.splice(index, 1);
        }
        return result;
    };
    const root = new ListNode(NaN);
    let node = root;
    lists = lists.filter(Boolean);
    while (lists.length) {
        node.next = getNode(node.val);
        node = node.next;
    }
    return root.next;
}
// @lc code=end
