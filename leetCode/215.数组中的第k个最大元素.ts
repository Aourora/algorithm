/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
    const logic = (start: number, end: number): number => {
        const target = nums[end];
        let i = start;
        for (let j = start; j < end; ++j) {
            if (nums[j] > target) {
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                ++i;
            }
        }
        nums[end] = nums[i];
        nums[i] = target;
        if (k === i + 1) {
            return target;
        } else if (k < i + 1) {
            return logic(0, i - 1);
        } else {
            return logic(i + 1, end);
        }
    };
    return logic(0, nums.length - 1);
}
// @lc code=end
