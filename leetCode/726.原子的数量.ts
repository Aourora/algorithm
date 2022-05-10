/*
 * @lc app=leetcode.cn id=726 lang=typescript
 *
 * [726] 原子的数量
 */

// @lc code=start
function countOfAtoms(formula: string): string {
    const result: { [key: string]: number } = {};
    const stack = [];
    let topRatio = 1;
    let currentName = '';
    let currentCount = '';

    const add = (key: string, count: number): void => {
        result[key] = count + (result[key] || 0);
    };
    for (let i = formula.length - 1; i >= 0; --i) {
        const char = formula.charAt(i);
        const codePoint = char.codePointAt(0) as number;
        if (codePoint >= 97) {
            currentName = char + currentName;
        } else if (codePoint >= 65) {
            add(char + currentName, (+currentCount || 1) * topRatio);
            currentCount = '';
            currentName = '';
        } else if (codePoint >= 48) {
            currentCount = char + currentCount;
        } else if (char === ')') {
            stack.push(+currentCount || 1);
            topRatio *= +currentCount || 1;
            currentCount = '';
        } else {
            topRatio /= stack.pop() as number;
        }
    }

    return Object.keys(result)
        .sort()
        .reduce(
            (res, key) => (res += key + (result[key] === 1 ? '' : result[key])),
            ''
        );
}

// @lc code=end
