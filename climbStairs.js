const memo = {}
var climbStairs = function(n) {
    
    if (memo[n]) {return memo[n]}
    if (n <= 2) { return n}
    memo[n] = climbStairs(n-1) + climbStairs(n-2)

    return memo[n]
};