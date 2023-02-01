/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
    const reverse = (s: Array<string>): Array<string> => {
        let start = 0,
            end = s.length - 1;
        while (start < end) {
            [s[start], s[end]] = [s[end], s[start]];
            ++start;
            --end;
        }
        return s;
    };
    return s
        .split(' ')
        .map((s) => reverse(s.split('')).join(''))
        .join(' ');
}
// @lc code=end
