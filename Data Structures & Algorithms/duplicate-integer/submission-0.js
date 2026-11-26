class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let dup = [],
        y = false

        nums.map(x=>{
            
            if(!dup.includes(x)){
                dup.push(x)             
            }
            else y = true
        })
        return y
    }
  
}
