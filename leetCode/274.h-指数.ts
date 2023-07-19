/*
 * @lc app=leetcode.cn id=274 lang=typescript
 *
 * [274] H 指数
 */

// @lc code=start
function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b);
    const { length } = citations;
    for (let i = 0; i < length; ++i) {
        if (citations[i] >= length - i) {
            return length - i;
        }
    }
    return 0;
}
// @lc code=end
