/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1,
        j = n - 1;
    while (i >= 0 && j >= 0) {
        nums1[i + j + 1] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) {
        nums1[j] = nums2[j--];
    }
}
// @lc code=end
