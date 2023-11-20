/*
 * @lc app=leetcode.cn id=2103 lang=typescript
 *
 * [2103] 环和杆
 */

// @lc code=start
function countPoints(rings: string): number {
    const color: Record<string, number> = { R: 1 << 0, G: 1 << 1, B: 1 << 2 };
    const ring = new Array(10).fill(0);
    for (let i = 1; i < rings.length; i += 2) {
        ring[+rings[i]] |= color[rings[i - 1]];
    }
    return ring.reduce((r, c) => (c === 7 ? ++r : r), 0);
}
// @lc code=end
