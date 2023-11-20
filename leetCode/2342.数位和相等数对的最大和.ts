/*
 * @lc app=leetcode.cn id=2342 lang=typescript
 *
 * [2342] 数位和相等数对的最大和
 */

// @lc code=start
function maximumSum(nums: number[]): number {
    const maxMap = new Map<number, number>();
    let max = -1;
    const getDigit = (num: number): number => {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = (num / 10) | 0;
        }
        return sum;
    };
    for (let i = 0; i < nums.length; ++i) {
        const digit = getDigit(nums[i]);

        if (maxMap.has(digit)) {
            max = Math.max(max, nums[i] + maxMap.get(digit));
        }

        maxMap.set(digit, Math.max(nums[i], maxMap.get(digit) || 0));
    }
    return max;
}
// @lc code=end
