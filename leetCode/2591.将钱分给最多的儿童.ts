/*
 * @lc app=leetcode.cn id=2591 lang=typescript
 *
 * [2591] 将钱分给最多的儿童
 */

// @lc code=start
function distMoney(money: number, children: number): number {
    money -= children;
    if (money < 0) return -1;
    let count = Math.min((money / 7) | 0, children);
    const remainder = money - 7 * count;
    if (
        count &&
        ((children - count === 0 && remainder) ||
            (children - count === 1 && remainder === 3))
    ) {
        --count;
    }

    return count;
}
// @lc code=end
