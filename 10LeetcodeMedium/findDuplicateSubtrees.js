/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const subtrees = new Map();
    const res = [];

    const dfs = (node) => {
        if (!node) return "null";

        const s = [node.val, dfs(node.left), dfs(node.right)].join(",");

        if (!subtrees.has(s)) {
            subtrees.set(s, []);
        } // this if does the job of defaultdiclist of python

        if (subtrees.get(s).length === 1) {
            res.push(node);
        }

        subtrees.get(s).push(node);

        return s; 
    };

    dfs(root);
    return res;
};