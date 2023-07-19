/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    const array = s.split('');
    let max = 0;
    let left = 0;
    let right = 0;
    let result = '';
    const { length } = array;
    for (let i = 0; i < length; ++i) {
        let len = 1;
        left = right = i;
        while (left > 0 && array[left - 1] === array[i]) {
            --left;
            ++len;
        }

        while (right < length - 1 && array[right + 1] === array[i]) {
            ++right;
            ++len;
        }

        while (
            left > 0 &&
            right < length - 1 &&
            array[right + 1] === array[left - 1]
        ) {
            --left;
            ++right;
            len += 2;
        }
        if (len > max) {
            result = s.slice(left, right + 1);
            max = len;
        }
    }
    return result;
}
// @lc code=end
