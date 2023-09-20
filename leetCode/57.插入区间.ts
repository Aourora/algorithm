/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let [min, max] = newInterval;
    for (let i = 0; i < intervals.length; ++i) {
        const [_min, _max] = intervals[i];
        if (max < _min) {
            result.push([min, max]);
            result.push(...intervals.slice(i));
            return result;
        } else if (min > _max) {
            result.push([_min, _max]);
        } else {
            min = Math.min(min, _min);
            max = Math.max(max, _max);
        }
    }
    result.push([min, max]);
    return result;
}
// @lc code=end
