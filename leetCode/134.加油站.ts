/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let i = 0;
    const { length } = gas;
    while (i < gas.length) {
        let r = 0;
        let step = 0;
        while (step < length) {
            r += gas[(i + step) % length] - cost[(i + step) % length];
            if (r < 0) break;
            ++step;
        }
        if (step === length) {
            return i;
        } else {
            i += step + 1;
        }
    }
    return -1;
}
// @lc code=end
