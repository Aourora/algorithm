/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const data: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const stack: string[] = [];

    for (const char of s) {
        if (!stack.length || data[char] !== stack[stack.length - 1]) {
            stack.push(char);
        } else {
            stack.pop();
        }
    }
    return !stack.length;
}
// @lc code=end
