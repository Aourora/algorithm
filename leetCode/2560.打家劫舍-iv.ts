/*
 * @lc app=leetcode.cn id=2560 lang=typescript
 *
 * [2560] 打家劫舍 IV
 */

// @lc code=start
function minCapability(nums: number[], k: number): number {
    const check = (v: number): boolean => {
        let f0 = 0,
            f1 = 0;
        for (const num of nums) {
            if (num > v) {
                f0 = f1;
            } else {
                [f0, f1] = [f1, Math.max(f1, f0 + 1)];
            }
        }
        return f1 >= k;
    };
    let left = 0,
        right = Math.max(...nums);
    while (left + 1 < right) {
        const mid = left + ((right - left) >> 1);
        if (check(mid)) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return right;
}
// @lc code=end
