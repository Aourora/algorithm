/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
    let maxLength = 0;
    const stack = [0];
    for (const char of s) {
        if (char === '(') {
            stack.push(0);
        } else {
            if (stack.length > 1) {
                stack[stack.length - 2] += 2 + (stack.pop() as number);
            } else {
                maxLength = Math.max(maxLength, stack[0]);
                stack[0] = 0;
            }
        }
    }
    return Math.max(maxLength, ...stack);
}
// @lc code=end
