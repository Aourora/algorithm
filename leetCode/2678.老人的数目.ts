/*
 * @lc app=leetcode.cn id=2678 lang=typescript
 *
 * [2678] 老人的数目
 */

// @lc code=start
function countSeniors(details: string[]): number {
    let sum = 0;
    for (const detail of details) {
        if (+detail[11] * 10 + +detail[12] > 60) ++sum;
    }
    return sum;
}
// @lc code=end
