/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const logic = (start, end) => {
        //原地分区
        const target = nums[end];
        let i = start;
        for (let j = start; j < end; ++j) {
            if (nums[j] > target) {
                const temp = nums[j];
                nums[j] = nums[i];
                nums[i++] = temp;
            }
        }
        nums[end] = nums[i];
        nums[i] = target;
        if (k === i + 1) {
            return nums[i];
        } else if (k < i + 1) {
            return logic(0, i - 1);
        } else {
            return logic(i + 1, end);
        }
    }
    return logic(0, nums.length - 1);
};


/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
    const colLength = grid[0].length;
    const last = grid[1][colLength - 1];
    const cache = new Map();
    const getNum = (row, start) => {
        if (start >= grid.length - 1) return grid[row][start];
        const key = `${row}${start}`;
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const value = getNum(row, start + 1) + grid[row][start];
            cache.set(key, value);
            return value;
        }
    };
    for (let i = 0; i < colLength; ++i) {
        if (getNum(0, i) + last < getNum(1, i)) {
            grid[1].slice(0, i - 1).concat(new Array(colLength - i).fill(0));
            grid[1][colLength - 1] = 0;
            break;
        } else {
            grid[0][i] = 0;
        }
    }
    cache.clear();
    const result = 0;
    for (let i = 0; i < colLength; ++i) {
        if (getNum(0, i) + last < getNum(1, i)) {
            result += getNum(1, i);
            break;
        } else {
            result += grid[0][i];
        }
    }
    return result;
};
// @lc code=end

