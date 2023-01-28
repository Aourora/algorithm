/*
 * @lc app=leetcode.cn id=1700 lang=typescript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
function countStudents(students: number[], sandwiches: number[]): number {
    let s1 = students.reduce((res, cur) => res + cur);
    let s0 = students.length - s1;
    for (const s of sandwiches) {
        if (s && s1) {
            --s1;
        } else if (!s && s0) {
            --s0;
        } else {
            break;
        }
    }
    return s0 + s1;
}
// @lc code=end
