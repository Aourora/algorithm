/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    const { length } = s1;
    let diff = length;
    const array: Array<number> = new Array(26).fill(0);
    const startCode = 'a'.charCodeAt(0);
    for (const s of s1) {
        ++array[s.charCodeAt(0) - startCode];
    }

    for (let i = 0; i < s2.length; ++i) {
        const index1 = s2[i].charCodeAt(0) - startCode;
        --array[index1];
        array[index1] >= 0 ? --diff : ++diff;
        if (i >= length) {
            const index2 = s2[i - length].charCodeAt(0) - startCode;
            ++array[index2];
            array[index2] > 0 ? ++diff : --diff;
        }
        if (!diff) return true;
    }

    return !diff;
}
// @lc code=end
checkInclusion('adc', 'dcda');
