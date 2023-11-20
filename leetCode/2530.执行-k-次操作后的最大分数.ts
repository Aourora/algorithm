/*
 * @lc app=leetcode.cn id=2530 lang=typescript
 *
 * [2530] 执行 K 次操作后的最大分数
 */
// @lc code=start

import Heap from './util/heap';

function maxKelements(nums: number[], k: number): number {
    const heap = new Heap((a: number, b: number) => b - a);
    for (const num of nums) {
        heap.insert(num);
    }
    let sum = 0;
    while (k--) {
        const max = heap.delete();
        sum += max;
        heap.insert(Math.ceil(max / 3));
    }
    return sum;
}
// @lc code=end
