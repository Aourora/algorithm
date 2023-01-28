/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    const result: Array<string> = [];
    const dfs = (sum: number, combination: string): void => {
        if (combination.length === n * 2) {
            result.push(combination);
            return;
        }
        if (sum > 0) {
            if (sum < n * 2 - combination.length) {
                dfs(sum + 1, combination + '(');
            }
            dfs(sum - 1, combination + ')');
        } else {
            dfs(sum + 1, combination + '(');
        }
    };
    dfs(0, '');
    return result;
}
// @lc code=end
