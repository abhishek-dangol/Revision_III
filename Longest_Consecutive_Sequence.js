function longestConsecutive(nums) {
    let numsSet = new Set(nums);
    let maxLen = 0;

    for (let num of numsSet) {
        if (!(numsSet.has(num - 1))) {
            let currNum = num;
            let currMaxLen = 1;
            while (numsSet.has(currNum + 1)) {
                currNum++;
                currMaxLen++;
            }
            maxLen = Math.max(maxLen, currMaxLen);
        }
    }
    return maxLen;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));