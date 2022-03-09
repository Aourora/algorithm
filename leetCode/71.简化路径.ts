/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
    const source = path.split('/').filter((s) => s !== '');
    const stack = [];
    for (const p of source) {
        if (p === '.') {
            continue;
        } else if (p === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(p);
        }
    }
    return '/' + stack.join('/');
}

// @lc code=end
