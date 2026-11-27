class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
 productExceptSelf(nums) {
    /**
     *  return nums.map((_, i) => {
            let ans = 1;
            nums.forEach((y, j) => { if (i !== j) ans *= y; });
            return ans;
        });
     */
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;      // product of everything left of i
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;     // multiply in the product of everything right of i
    suffix *= nums[i];
  }

  return result;

 
}}
