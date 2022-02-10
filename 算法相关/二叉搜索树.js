
class BinarySearchTree {
    root;
    add(value) {
        let node = this.root;
        if (!node) {
            this.root = { val: value };
            return;
        }
        while (node) {
            if (node.val < value) {
                if (!node.right) {
                    node.right = { val: value };
                    return;
                }
                node = node.right;
            } else if (node.val > value) {
                if (!node.left) {
                    node.left = { val: value };
                    return;
                }
                node = node.left;
            }
        }
    }

    delete(value) {
        let node = this.root;
        let parent = null;
        let key;
        while (node && node.val !== value) {
            parent = node;
            if (node.val < value) {
                node = node.right;
                key = 'right';
            } else if (node.val > value) {
                node = node.left;
                key = 'left';
            }
        }
        if (!node) return;
        if (node.left && node.right) {
            let _parent = null;
            node = node.right;
            while (node.left) {
                _parent = node;
                node = node.left;
            }
            if (parent) {
                parent[key].val = node.val;
            } else {
                this.root.val = node.val;
            }
            if (_parent) {
                _parent.left = node.right;
            } else {
                if (parent) {
                    parent[key].left = node.right;
                } else {
                    this.root.left = node.right;
                }
            }
        } else {
            if (parent) {
                parent[key] = node.left || node.right;
            } else {
                this.root = node.left || node.right;
            }

        }
        this.log();
    }

    find(value) {
        let node = this.root;
        while (node) {
            if (node.val < value) {
                node = node.right;
            } else if (node.val > value) {
                node = node.left;
            } else {
                return node;
            }
        }
        return null;
    }

    max() {
        const dfs = (node) => {
            if (node.right) {
                return dfs(node.right);
            } else {
                if (node.val) {
                    return node.val;
                } else {
                    return NaN;
                }
            }
        }
        console.log(dfs(this.root));
        return dfs(this.root);
    }

    min() {
        const dfs = (node) => {
            if (node.left) {
                return dfs(node.left);
            } else {
                if (node.val) {
                    return node.val;
                } else {
                    return NaN;
                }
            }
        }
        console.log(dfs(this.root));
        return dfs(this.root);
    }

    log() {
        const dfs = (node) => {
            if (!node) return;
            dfs(node.left);
            console.log(node.val);
            dfs(node.right);
        }
        dfs(this.root);
    }
}

const test = new BinarySearchTree();
const tabel = {
    add: v => test.add(v),
    finde: v => test.find(v),
    delete: v => test.delete(v),
    max: () => test.max(),
    min: () => test.min(),
    log: () => test.log()
}
// process.stdin.on('data', e => {
//     const s = e.toString();
//     const fun = s.replace(/\(.*\)/g, '');
//     const arg = parseFloat(s.replace(/.*\(/, ''));
//     const f = tabel[fun.toString()];
//     console.log(fun, arg, f);
//     f(arg);
// })


