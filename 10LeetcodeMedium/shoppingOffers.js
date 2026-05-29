var shoppingOffers = function(price, special, needs) {
    const memo = new Map();
    
    function solve(curr) {
        const key = curr.toString();
        if (memo.has(key)) return memo.get(key);
        
        // Option 1: buy everything at regular price (no more offers)
        let best = curr.reduce((sum, cnt, i) => sum + cnt * price[i], 0);
        
        // Option 2: try each special offer
        for (const offer of special) {
            const next = [];
            let valid = true;
            
            for (let i = 0; i < curr.length; i++) {
                if (offer[i] > curr[i]) { valid = false; break; }
                next.push(curr[i] - offer[i]);  // subtract offer items
            }
            
            if (valid) {
                // offer[n] is the offer's price (last element)
                best = Math.min(best, offer[offer.length - 1] + solve(next));
            }
        }
        
        memo.set(key, best);
        return best;
    }
    
    return solve(needs);
};


// other way

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const lookup = {};

    const solve = (needs) => {
        const key = needs.toString();
        if (key in lookup) return lookup[key];

        // Regular price fallback
        let minPrice = needs.reduce((sum, current, i) => sum + current * price[i], 0);

        // Try each special offer
        for (const offer of special) {
            const valid = needs.every((current, i) => offer[i] <= current);
            if (valid) {
                const newNeeds = needs.map((current, i) => current - offer[i]);
                minPrice = Math.min(minPrice, offer[offer.length - 1] + solve(newNeeds));
            }
        }

        lookup[key] = minPrice;
        return minPrice;
    }

    return solve(needs);
};