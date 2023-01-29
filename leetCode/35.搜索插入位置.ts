/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        const mid = left + (((right - left) / 2) | 0);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[right] >= target ? right : right + 1;
}

// @lc code=end
