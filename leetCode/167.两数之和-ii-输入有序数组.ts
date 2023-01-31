/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    const { length } = numbers;
    for (let i = 0; i < length - 1; ++i) {
        const num = numbers[i];
        let start = i + 1,
            end = length - 1;
        while (start <= end) {
            const mid = start + (((end - start) / 2) | 0);
            if (num + numbers[mid] > target) {
                end = mid - 1;
            } else if (num + numbers[mid] < target) {
                start = mid + 1;
            } else {
                return [i + 1, mid + 1];
            }
        }
    }
}
// @lc code=end
