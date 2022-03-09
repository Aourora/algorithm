/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
    const { length } = nums;
    const queque = [];
    let sum = 0;
    for (let i = 0; i < k; ++i) {
        queque.push(nums[i]);
        sum += nums[i];
    }
    let first = { val: -Infinity, index: 0 };
    let second = { val: -Infinity, index: 0 };
    let third = { val: -Infinity, index: 0 };
    for (let i = 0, len = length - k; i < len; ++i) {
        if (sum > first.val) {
            third = second;
            second = first;
            first = { val: sum, index: i };
        } else if (sum > second) {
            third = second;
            second = { val: sum, index: i };
        } else if (sum > third) {
            third = { val: sum, index: i };
        }
        queque.push(nums[i]);
        sum += nums[i + k] - queque.pop();
    }
    if (sum > first.val) {
        third = second;
        second = first;
        first = { val: sum, index: length - k };
    } else if (sum > second) {
        third = second;
        second = { val: sum, index: length - k };
    } else if (sum > third) {
        third = { val: sum, index: length - k };
    }
    return [first.index, second.index, third.index].sort((a, b) => a - b);
};

maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1, 3], 3);
