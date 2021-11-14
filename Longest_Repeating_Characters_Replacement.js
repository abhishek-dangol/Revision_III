function characterReplacement(s, k) {
    if (s.length === 0) {
        return 0;
    }
    if (s.length === k) {
        return s.length;
    }

    let windowStart = 0;
    let maxRepeatCount = 0;
    let maxLen = 0;
    let hashmap = {};
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
        let rightChar = s[windowEnd];
        if (!(rightChar in hashmap)) {
            hashmap[rightChar] = 0;
        }
        hashmap[rightChar] += 1;

        maxRepeatCount = Math.max(maxRepeatCount, hashmap[rightChar]);
        
        if ((windowEnd - windowStart + 1 - maxRepeatCount) > k) {
            let leftChar = s[windowStart];
            hashmap[leftChar] -= 1;
            windowStart -= 1;
        }
        maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
    }
    return maxLen;
}

console.log(characterReplacement("ABAB", 2));