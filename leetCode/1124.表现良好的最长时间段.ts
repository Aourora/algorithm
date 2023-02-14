/*
 * @lc app=leetcode.cn id=1124 lang=typescript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
function longestWPI(hours: number[]): number {
    const preSum: Array<number> = [0];
    const stack: Array<number> = [0];

    for (let i = 1; i <= hours.length; ++i) {
        preSum.push(preSum[preSum.length - 1] + (hours[i - 1] > 8 ? 1 : -1));
        if (preSum[i] < preSum[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }

    let max = 0;
    for (let i = preSum.length - 1; i > 0; --i) {
        while (stack.length && preSum[i] > preSum[stack[stack.length - 1]]) {
            max = Math.max(max, i - stack.pop());
        }
    }
    return max;
}
// @lc code=end
