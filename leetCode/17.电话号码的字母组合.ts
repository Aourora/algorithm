/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];
    let k = -1;
    const array = Array.from({ length: 8 }, (_: number, i: number) => {
        const temp = [];
        temp.push(
            String.fromCodePoint(97 + ++k),
            String.fromCodePoint(97 + ++k),
            String.fromCodePoint(97 + ++k)
        );
        if (i === 5 || i === 7) temp.push(String.fromCodePoint(97 + ++k));
        return temp;
    });
    const result: Array<string> = [];
    const dfs = (dep: number, combination: string): void => {
        const cs = array[+digits.charAt(dep) - 2];
        for (const c of cs) {
            if (dep < digits.length - 1) {
                dfs(dep + 1, combination + c);
            } else {
                result.push(combination + c);
            }
        }
    };
    dfs(0, '');
    return result;
}
// @lc code=end
