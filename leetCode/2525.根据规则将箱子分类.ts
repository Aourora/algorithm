/*
 * @lc app=leetcode.cn id=2525 lang=typescript
 *
 * [2525] 根据规则将箱子分类
 */

// @lc code=start
const a = Math.pow(10, 4);
const b = Math.pow(10, 9);
function categorizeBox(
    length: number,
    width: number,
    height: number,
    mass: number
): string {
    return ['Neither', 'Bulky', 'Heavy', 'Both'][
        +(
            length >= a ||
            width >= a ||
            height >= a ||
            length * width * height >= b
        ) +
            2 * +(mass >= 100)
    ];
}
// @lc code=end
