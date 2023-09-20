/*
 * @lc app=leetcode.cn id=849 lang=typescript
 *
 * [849] 到最近的人的最大距离
 */

// @lc code=start
function maxDistToClosest(seats: number[]): number {
    let max = 0;
    let offset = 0;
    let flag = true;
    for (let i = 0; i < seats.length; ++i) {
        if (seats[i]) {
            max = Math.max(max, flag ? offset : Math.ceil(offset / 2));
            flag = false;
            offset = 0;
        } else {
            ++offset;
        }
    }
    max = Math.max(max, offset);
    return max;
}
// @lc code=end
