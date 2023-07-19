/*
 * @lc app=leetcode.cn id=1129 lang=typescript
 *
 * [1129] 颜色交替的最短路径
 */

// @lc code=start
function shortestAlternatingPaths(
    n: number,
    redEdges: number[][],
    blueEdges: number[][]
): number[] {
    const closeList: Array<number> = [];
    const redMap: Map<number, Array<number>> = new Map();
    const blueMap: Map<number, Array<number>> = new Map();
    for (const [key, value] of redEdges) {
        redMap.set(key, (redMap.get(key) || []).concat([value]));
    }
    for (const [key, value] of blueEdges) {
        blueMap.set(key, (blueMap.get(key) || []).concat([value]));
    }
    const search = (start: number, end: number, bool: boolean): number => {
        if (start === end) return 1;
        if (closeList.includes(start)) return Infinity;
        const nodes = bool ? redMap.get(start) : blueMap.get(start);
        if (!nodes) return Infinity;
        closeList.push(start);
        const min = Math.min(...nodes.map((node) => search(node, end, !bool)));
        closeList.pop();
        return min === Infinity ? min : min + 1;
    };
    const result = [1];
    for (let i = 1; i < n; ++i) {
        closeList.length = 0;
        result[i] = Math.min(search(0, i, true), search(0, i, false));
    }
    return result.map((v) => (v === Infinity ? -1 : v - 1));
}
// @lc code=end
