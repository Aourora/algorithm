/*
 * @lc app=leetcode.cn id=2240 lang=typescript
 *
 * [2240] 买钢笔和铅笔的方案数
 */

// @lc code=start
function waysToBuyPensPencils(
    total: number,
    cost1: number,
    cost2: number
): number {
    let count = 0;
    const max = Math.floor(total / cost1);
    for (let i = 0; i <= max; ++i) {
        count += Math.floor((total - cost1 * i) / cost2) + 1;
    }
    return count;
}
// @lc code=end
