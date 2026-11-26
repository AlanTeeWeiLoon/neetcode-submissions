class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
 const groups = new Map()

  for (const s of strs) {
    const key = s.split('').sort().join('')   // "pots" -> "opst"

    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(s)
  }

  return [...groups.values()]
}}
