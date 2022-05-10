import { TreeNode } from '../../leetCode/common';

class BinarySearchTree {
    private root!: TreeNode | null;
    public add(value: number): void {
        let node = this.root;
        if (!node) {
            this.root = new TreeNode(value);
            return;
        }
        while (node) {
            if (node.val < value) {
                if (!node.right) {
                    node.right = new TreeNode(value);
                    return;
                }
                node = node.right;
            } else if (node.val > value) {
                if (!node.left) {
                    node.left = new TreeNode(value);
                    return;
                }
                node = node.left;
            }
        }
    }

    public delete(value: number): void {
        let node: TreeNode | null = this.root;
        let parent!: Record<string, any>;
        let key!: string;
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
                this.root!.val = node.val;
            }
            if (_parent) {
                _parent.left = node.right;
            } else {
                if (parent) {
                    parent[key].left = node.right;
                } else {
                    this.root!.left = node.right;
                }
            }
        } else {
            if (parent) {
                parent[key] = node.left || node.right;
            } else {
                this.root = node.left || node.right;
            }
        }
    }

    public find(value: number): boolean {
        let node = this.root;
        while (node) {
            if (node.val < value) {
                node = node.right;
            } else if (node.val > value) {
                node = node.left;
            } else {
                return true;
            }
        }
        return false;
    }

    public max(): number {
        if (!this.root) return NaN;
        let node = this.root;
        while (node.right) {
            node = node.right;
        }
        return node.val;
    }

    public min(): number {
        if (!this.root) return NaN;
        let node = this.root;
        while (node.left) {
            node = node.left;
        }
        return node.val;
    }

    public getAll(): number[] {
        const result: number[] = [];
        const dfs = (node: TreeNode | null): void => {
            if (!node) return;
            dfs(node.left);
            result.push(node.val);
            dfs(node.right);
        };
        dfs(this.root);
        return result;
    }

    public morris(): number[] {
        const result: number[] = [];
        let node = this.root;
        while (node) {
            console.log(node.val);
            if (node.left) {
                let pre = node.left;
                while (pre.right && pre.right !== node) {
                    pre = pre.right;
                }

                if (pre.right) {
                    result.push(node.val);
                    pre.right = null;
                    node = node.right;
                } else {
                    pre.right = node;
                    node = node.left;
                }
            } else {
                result.push(node.val);
                node = node.right;
            }
        }
        return result;
    }
}

//test

const tree = new BinarySearchTree();

for (let i = 0; i < 10; ++i) {
    //
    let num;
    while (tree.find((num = (Math.random() * 10) | 0)));
    tree.add(num);
}

console.log(tree.getAll().toString() === tree.morris().toString());
