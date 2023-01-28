/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
    const rowMap = new Map<string, boolean>();
    const arrayColMap = Array.from(
        { length: 9 },
        () => new Map<string, boolean>()
    );
    const arrayGridMap = Array.from(
        { length: 3 },
        () => new Map<string, boolean>()
    );
    for (let i = 0; i < 9; ++i) {
        rowMap.clear();
        if (i % 3 == 0) {
            arrayGridMap.forEach((map) => map.clear());
        }
        for (let j = 0; j < 9; ++j) {
            const value = board[i][j];
            if (value === '.') continue;
            if (
                rowMap.has(value) ||
                arrayColMap[j].has(value) ||
                arrayGridMap[Math.floor(j / 3)].has(value)
            ) {
                return false;
            }
            rowMap.set(value, true);
            arrayColMap[j].set(value, true);
            arrayGridMap[Math.floor(j / 3)].set(value, true);
        }
    }
    return true;
}
// @lc code=end
