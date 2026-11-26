class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0,
        j = 1,
        result = [],
        initnums=nums
        

        

        nums.map((a,i)=>{
            let temp = target - a
            nums.slice(i,1)
            if(nums.indexOf(temp)!=-1){
                result = [i,nums.indexOf(temp)]
            }
        })
        return result
    }
}
