/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
    let pre = 0,
        cur = 0;
    for (let i = 2; i <= cost.length; ++i) {
        const next = Math.min(cost[i - 1] + cur, cost[i - 2] + pre);
        pre = cur;
        cur = next;
    }
    return cur;
}
// @lc code=end
