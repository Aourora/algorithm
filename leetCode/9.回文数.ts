/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    const stak = [];
    const array = x.toString().split('');
    const length = Math.ceil(array.length / 2);
    const flag = array.length % 2 !== 0;
    for (let i = 0; i < length; ++i) {
        stak.push(array[i]);
    }
    flag && stak.pop();
    for (let i = length; i < array.length; ++i) {
        if (stak.pop() !== array[i]) return false;
    }
    return true;
}

// var isPalindrome = function (x: number) {
//     if (x < 0) return false;
//     if (x < 10) return true;

//     let result = 0;
//     const recursion = (x: number) => {
//         if (x === 0) return;
//         result = result * 10 + (x % 10);
//         recursion(Math.floor(x / 10));
//     };
//     recursion(x);
//     return x === result;
// };

// @lc code=end
