/*
 * @lc app=leetcode.cn id=2347 lang=typescript
 *
 * [2347] 最好的扑克手牌
 */

// @lc code=start
function bestHand(ranks: number[], suits: string[]): string {
    if (suits.every((s) => s === suits[0])) return 'Flush';
    const map: Map<number, number> = new Map();
    for (const r of ranks) {
        map.set(r, (map.get(r) || 0) + 1);
    }
    return [
        'High Card',
        'Pair',
        'Three of a Kind',
        'Three of a Kind',
        'Three of a Kind',
    ][Math.max(...map.values()) - 1];
}
// @lc code=end
