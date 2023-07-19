/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    let readState: boolean = false;
    let result = 0;
    let negative = false;
    for (const char of s) {
        if (!readState) {
            if (/-|\+/.test(char)) {
                negative = char === '-';
                readState = true;
            } else if (/\d/.test(char)) {
                result = +char;
                readState = true;
            } else if (char !== ' ') {
                return 0;
            }
        } else if (/\d/.test(char)) {
            result = result * 10 + +char;
        } else {
            break;
        }
    }
    result *= negative ? -1 : 1;
    result = Math.min(2 ** 31 - 1, Math.max(-(2 ** 31), result));
    return result;
}
// @lc code=end
