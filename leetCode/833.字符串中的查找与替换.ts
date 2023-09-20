/*
 * @lc app=leetcode.cn id=833 lang=typescript
 *
 * [833] 字符串中的查找与替换
 */

// @lc code=start
function findReplaceString(
    s: string,
    indices: number[],
    sources: string[],
    targets: string[]
): string {
    const k = sources.length;
    const map: Map<number, number> = new Map();
    for (let i = 0; i < k; ++i) {
        const index = indices[i];
        if (s.indexOf(sources[i], index) === index) {
            map.set(index, i);
        }
    }
    let i = 0;
    let result = '';
    while (i < s.length) {
        if (map.has(i)) {
            result += targets[map.get(i)];
            i += sources[map.get(i)].length;
        } else {
            result += s[i];
            ++i;
        }
    }
    return result;
}
// @lc code=end
