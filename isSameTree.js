/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const a = serialize(p, [])
    const b = serialize(q, [])

    return a.join('') === b.join('')
};

function serialize(root, results) {
    if (!root) {
        results.push('x')
        return results
    }

    results.push(root.val)
    serialize(root.left, results)
    serialize(root.right, results)
    return results
}