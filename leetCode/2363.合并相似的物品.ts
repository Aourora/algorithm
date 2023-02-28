/*
 * @lc app=leetcode.cn id=2363 lang=typescript
 *
 * [2363] 合并相似的物品
 */

// @lc code=start
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    const map = new Map<number, number>();
    const temp = items1.concat(items2);
    for (const [v, w] of temp) {
        map.set(v, (map.get(v) || 0) + w);
    }
    const result: Array<Array<number>> = [];

    for (const [v, w] of map.entries()) {
        result.push([v, w]);
    }
    result.sort(([v1], [v2]) => v1 - v2);
    return result;
}
// @lc code=end
