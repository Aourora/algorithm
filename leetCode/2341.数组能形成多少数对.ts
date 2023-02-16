/*
 * @lc app=leetcode.cn id=2341 lang=typescript
 *
 * [2341] 数组能形成多少数对
 */

// @lc code=start
function numberOfPairs(nums: number[]): number[] {
    const map = new Map<number, number>();
    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    const result = [0, 0];
    for (const n of map.values()) {
        result[0] += (n / 2) | 0;
        result[1] += n % 2;
    }
    return result;
}
// @lc code=end
