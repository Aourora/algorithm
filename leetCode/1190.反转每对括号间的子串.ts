/*
 * @lc app=leetcode.cn id=1190 lang=typescript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
function reverseParentheses(s: string): string {
    const stack = [];
    let current: string = '';
    for (const char of s) {
        if (char === '(') {
            stack.push(current);
            current = '';
        } else if (char === ')') {
            let reverse = '';
            for (let i = current.length - 1; i >= 0; --i) {
                reverse += current.charAt(i);
            }
            current = stack.pop() + reverse;
        } else {
            current += char;
        }
    }
    return current;
}
// @lc code=end
