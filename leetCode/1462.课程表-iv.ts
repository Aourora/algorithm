/*
 * @lc app=leetcode.cn id=1462 lang=typescript
 *
 * [1462] 课程表 IV
 */

// @lc code=start
function checkIfPrerequisite(
    numCourses: number,
    prerequisites: number[][],
    queries: number[][]
): boolean[] {
    const map = new Map<number, Map<number, boolean>>();
    for (const [p, c] of prerequisites) {
        let m = map.get(c);
        if (!m) {
            map.set(c, (m = new Map()));
        }
        m.set(p, true);
    }

    const collect = (array: Array<Map<number, boolean>>, key: number): void => {
        const m = map.get(key);
        for (const k of m.keys()) {
            array.forEach((map) => map.set(k, true));
            if (map.has(k) && !m.has(-1)) {
                collect([...array, m], k);
            }
        }
        m.set(-1, true);
    };

    for (const key of map.keys()) {
        const m = map.get(key);
        m.set(-1, true);

        for (const k of m.keys()) {
            if (map.has(k)) {
                collect([m], k);
            }
        }
    }

    return queries.map(([p, c]) => map.has(c) && map.get(c).has(p));
}
// @lc code=end
