/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let min = Infinity;
    let max = -Infinity;
    for (const p of prices) {
        min = Math.min(p, min);
        max = Math.max(max, p - min);
    }
    return max;
}
// @lc code=end
