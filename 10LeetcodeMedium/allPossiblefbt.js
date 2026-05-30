/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    const memo = { 0: [], 1: [new TreeNode(0)] }

    const backtrack = (n) => {
        if (n in memo) return memo[n]

        const res = []
        
        for (let l = 0; l < n; l++) {
            const r = n - 1 - l
            const leftTrees = backtrack(l)
            const rightTrees = backtrack(r)

            for (const t1 of leftTrees) {
                for (const t2 of rightTrees) {
                    res.push(new TreeNode(0, t1, t2))
                }
            }
        }

        memo[n] = res
        return res
    }

    return backtrack(n)
};