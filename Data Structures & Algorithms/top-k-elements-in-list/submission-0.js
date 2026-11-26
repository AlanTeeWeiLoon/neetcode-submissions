class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
const count = new Map();

  for (const n of nums) {
    count.set(n, (count.get(n) || 0) + 1);   // {1:1, 2:2, 3:3}
  }

  return [...count.entries()]          // [[1,1], [2,2], [3,3]]
    .sort((a, b) => b[1] - a[1])       // highest count first: [[3,3], [2,2], [1,1]]
    .slice(0, k)                       // first k: [[3,3], [2,2]]
    .map(([num]) => num);              // keep the numbers: [3, 2]

    }
}
