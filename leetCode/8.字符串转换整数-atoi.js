/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.replace(/^\s*/, "");
    const result = /\d+/.exec(s);
    if (!result) return 0;
    const str = result[0];
    if (str === "" || result['index'] > 1) return 0;
    if (result['index'] === 1 && !(s[0] === '-' || s[0] === '+')) return 0;
    const array = str.split("");
    const flag = s[0] === "-" ? -1 : 1;
    let number = 0;
    while (array.length !== 0) {
        number += array.shift() * 10 ** array.length;
    }
    number *= flag;
    number = number > (2 ** 31 - 1) ? (2 ** 31 - 1) : number;
    number = number < (-2) ** 31 ? (-2) ** 31 : number;
    return number;
};



// @lc code=end

