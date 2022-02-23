/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start

// Definition for singly-linked list.

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let data = 0;
    let node = new ListNode();
    const result = node;
    while (l1 || l2) {
        node.next = new ListNode();
        node = node.next;
        if (l1) {
            data += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            data += l2.val;
            l2 = l2.next;
        }
        node.val = data % 10;
        data = Math.floor(data / 10);
    }
    if (data) {
        node.next = new ListNode();
        node = node.next;
        node.val = data % 10;
    }
    return result.next;
}
// @lc code=end
