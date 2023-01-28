/*
 * @lc app=leetcode.cn id=1822 lang=typescript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
function arraySign(nums: number[]): number {
    let res = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] < 0) {
            ++res;
        } else {
            return 0;
        }
        return res;
    }
    return res % 2 === 0 ? 1 : -1;
}
// @lc code=end
console.log(arraySign([-1, 1, -1, 1, -1]));
