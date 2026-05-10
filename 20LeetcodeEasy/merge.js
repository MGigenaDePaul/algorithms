/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // m and n (integers)
    // m elements should be merged
    // last n elements are 0 and should be ignored
    // length nums1 = m + n
    // length nums2 = n

    // last index nums1
    let last = m + n - 1
    
    // merge in reverse order
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[last] = nums1[m - 1]
            m -= 1
        } else { // if they are equal or if nums2[n-1] is greater
            nums1[last] = nums2[n - 1]
            n -= 1
        }
        last -= 1
    }

    // fill nums1 with leftover nums2 elements
    while (n > 0) {
        nums1[last] = nums2[n - 1]
        n -= 1
        last -= 1 
    }
};

let result = merge(nums1 = [1,2,3,0,0,0], 3, [2,5,6], 3)
console.log(nums1)