/*
 * @lc app=leetcode.cn id=771 lang=typescript
 *
 * [771] 宝石与石头
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
    let count = 0;
    const map = new Map();
    for (const char of jewels) {
        map.set(char, true);
    }
    for (const char of stones) {
        if (map.has(char)) {
            ++count;
        }
    }
    return count;
}
// @lc code=end
