/*
 * @lc app=leetcode.cn id=874 lang=typescript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
function robotSim(commands: number[], obstacles: number[][]): number {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const set = new Set();
    for (const [x, y] of obstacles) {
        set.add(`${x}_${y}`);
    }
    let px = 0,
        py = 0,
        dir = 0,
        max = 0;

    for (const cmd of commands) {
        if (cmd < 0) {
            dir += cmd === -1 ? 1 : 3;
            dir %= 4;
        } else {
            for (let i = 0; i < cmd; ++i) {
                if (set.has(`${px + dx[dir]}_${py + dy[dir]}`)) {
                    break;
                }
                px += dx[dir];
                py += dy[dir];
                max = Math.max(max, px * px + py * py);
            }
        }
    }
    return max;
}
// @lc code=end
