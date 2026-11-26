class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charS = [...s],
        charT = [...t],
        result = true
if(charS.length!=charT.length) return false
        charS.map(x=>{
          if(charT.indexOf(x)!=-1){
            charT.splice(charT.indexOf(x),1)
          }
          else result = false
        })
        return result
    }
}
