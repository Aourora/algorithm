/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let i = 0;
    const stack = [];
    for (const x of pushed) {
        stack.push(x);
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            ++i;
        }
    }
    return !stack.length;
}
// @lc code=end
