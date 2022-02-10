/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */


// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     if (x < 0) return false;
//     if (x < 10) return true;
//     return x.toString() === x.toString().split('').reverse().join('');
// };

//解法一
// var isPalindrome = function (x) {
//     if (x < 0) return false;
//     if (x < 10) return true;

//     let result = 0;
//     const recursion = (x) => {
//         if (x === 0) return;
//         result = result * 10 + x % 10;
//         recursion(Math.floor(x / 10));
//     };
//     recursion(x);
//     return x === result;
// }

//解法二
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;

    const stak = [];
    const array = x.toString().split('');
    const length = Math.ceil(array.length / 2)
    const flag = array.length % 2 !== 0
    for (let i = 0; i < length; ++i) {
        stak.push(array[i]);
    }
    flag && stak.pop();
    for (let i = length; i < array.length; ++i) {
        if (stak.pop() !== array[i]) return false;
    }
    return true;


}
// @lc code=end

