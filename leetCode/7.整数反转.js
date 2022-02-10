/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (!x) return x;
    let result = 0;
    const array = x.toString().split('');
    while (array[array.length - 1] === '0') {
        array.pop();
    }
    array.reverse();
    if (array[array.length - 1] === '-') {
        array.pop();
        result = parseInt(array.join('')) * -1
    } else {
        result = parseInt(array.join(''))
    }
    return (result > (2 ** 31 - 1) || result < (-2) ** 31) ? 0 : result

};
// @lc code=end

