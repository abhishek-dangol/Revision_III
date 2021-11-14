function lengthOfLongestSubstring(s) {
    let maxCount = 0;
    let left = 0;
    let right = 0;
    let set = new Set();

    while (right < s.length) {
        if (!(set.has(s[right]))) {
            set.add(s[right]);
            right++;
            maxCount = Math.max(maxCount, set.size);
        } else {
            set.delete(s[left]);
            left++
        }
    }
    return maxCount;
}

console.log(lengthOfLongestSubstring("abcabcbb"));