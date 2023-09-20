/*
 * @lc app=leetcode.cn id=2511 lang=typescript
 *
 * [2511] 最多可以摧毁的敌人城堡数目
 */

// @lc code=start
function captureForts(forts: number[]): number {
    let start = 0;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < forts.length; ++i) {
        if (start) {
            if (!forts[i]) {
                ++sum;
            } else {
                if (start === -forts[i]) {
                    max = Math.max(sum, max);
                }
                sum = 0;
            }
        }

        if (forts[i]) {
            start = forts[i];
        }
    }
    return max;
}
// @lc code=end
