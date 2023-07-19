/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
    const sLen = s.length;
    const pLen = p.length;
    const f = Array.from({ length: sLen + 1 }, () =>
        new Array(pLen + 1).fill(false)
    );
    f[0][0] = true;
    for (let j = 1; j < pLen + 1; j++) {
        if (p[j - 1] == '*') f[0][j] = f[0][j - 2];
    }

    for (let i = 1; i <= sLen; ++i) {
        for (let j = 1; j <= pLen; ++j) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                f[i][j] = f[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    f[i][j] = f[i][j - 2] || f[i - 1][j - 2] || f[i - 1][j];
                } else {
                    f[i][j] = f[i][j - 2];
                }
            }
        }
    }
    return f[sLen][pLen];
}
// @lc code=end
