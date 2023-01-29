/*
 * @lc app=leetcode.cn id=1664 lang=typescript
 *
 * [1664] 生成平衡数组的方案数
 */

// @lc code=start
function waysToMakeFair(nums: number[]): number {
    const [evenSum, oddSum] = nums.reduce(
        (array, value, index) => {
            array[index & 1] += value;
            return array;
        },
        [0, 0]
    );
    let result = 0;
    const array = [0, 0];
    for (let i = 0; i < nums.length; ++i) {
        const [e, o] = array;
        if (
            e + oddSum - o - ((i & 1) === 1 ? nums[i] : 0) ===
            o + evenSum - e - ((i & 1) === 0 ? nums[i] : 0)
        ) {
            ++result;
        }
        array[i & 1] += nums[i];
    }
    return result;
}
// @lc code=end
