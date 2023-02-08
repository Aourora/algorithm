/*
 * @lc app=leetcode.cn id=1233 lang=typescript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start

class Trie<T> {
    constructor(
        public ref: number = -1,
        public children: Map<T, Trie<T>> = new Map()
    ) {}
}

function removeSubfolders(folder: string[]): string[] {
    const root: Trie<string> = new Trie();
    for (let i = 0; i < folder.length; ++i) {
        const paths = folder[i].split('/');
        paths.shift();
        let cur = root;
        for (const path of paths) {
            if (!cur.children.has(path)) {
                cur.children.set(path, new Trie());
            }
            cur = cur.children.get(path);
        }
        cur.ref = i;
    }
    const res: Array<string> = [];
    const dfs = (
        source: Array<string>,
        result: Array<string>,
        trie: Trie<string>
    ): void => {
        if (trie.ref !== -1) {
            result.push(source[trie.ref]);
        } else {
            for (const t of trie.children.values()) {
                dfs(source, result, t);
            }
        }
    };
    dfs(folder, res, root);
    return res;
}
// @lc code=end
