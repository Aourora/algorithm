/*
 * @lc app=leetcode.cn id=722 lang=typescript
 *
 * [722] 删除注释
 */

// @lc code=start
function removeComments(source: string[]): string[] {
    let state = 0;
    const result: string[] = [];
    let temp = '';
    for (const str of source) {
        for (let i = 0; i < str.length; ++i) {
            if (!state) {
                if (str[i] === '/' && str[i + 1] === '/') {
                    state = 1;
                    ++i;
                } else if (str[i] === '/' && str[i + 1] === '*') {
                    state = 2;
                    ++i;
                } else {
                    temp += str[i];
                }
            } else if (state === 2 && str[i] === '*' && str[i + 1] === '/') {
                state = 0;
                ++i;
            }
        }
        if (temp && state !== 2) {
            result.push(temp);
            temp = '';
        }
        if (state === 1) {
            state = 0;
        }
    }
    return result;
}
// @lc code=end
