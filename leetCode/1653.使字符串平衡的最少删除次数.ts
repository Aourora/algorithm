/*
 * @lc app=leetcode.cn id=1653 lang=typescript
 *
 * [1653] 使字符串平衡的最少删除次数
 */

// @lc code=start
function minimumDeletions(s: string): number {
    // let count = 0;
    // for (const c of s) {
    //     count += c.charCodeAt(0) - 'a'.charCodeAt(0);
    // }
    // count = s.length - count;
    // let min = count;
    // for (const c of s) {
    //     count += (c.charCodeAt(0) - 'a'.charCodeAt(0)) * 2 - 1;
    //     min = Math.min(min, count);
    // }
    // return min;
    const f = new Array(s.length + 1).fill(0);
    let count = 0;
    for (let i = 1; i < f.length; ++i) {
        if (s[i - 1] === 'b') {
            ++count;
            f[i] = f[i - 1];
        } else {
            f[i] = Math.min(f[i - 1] + 1, count);
        }
    }
    return f[s.length];
}
// @lc code=end
