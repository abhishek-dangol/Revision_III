function lengthOfLIS(nums) {
    let dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++){
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }
    let longest = 0;
    for (let i = 0; i < dp.length; i++){
        longest = Math.max(longest, dp[i]);
    }
    return longest;
}