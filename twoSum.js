
 
var twoSum = function(nums, target) {  
    for(let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log('i', i)
                console.log('j', j)
                return [i, j]
            }
        }
    }

};

let result = twoSum([2,5,5,11, 45, 50, 20], 61)
console.log(result)