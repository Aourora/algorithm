/*
 * @lc app=leetcode.cn id=2578 lang=typescript
 *
 * [2578] 最小和分割
 */

// @lc code=start
function splitNum(num: number): number {
    let numbers = num
        .toString()
        .split('')
        .filter((s) => s !== '0');
    numbers = numbers.sort((a, b) => +b - +a);
    let sum = 0;
    for (let index = 0; index < numbers.length; index += 2) {
        sum +=
            (+(numbers[index] || 0) + +(numbers[index + 1] || 0)) *
            Math.pow(10, index / 2);
    }
    return sum;
}
// @lc code=end
