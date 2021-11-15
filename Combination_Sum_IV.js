function combinationSumIV(nums, target) {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i < dp.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (i - nums[j] >= 0) {
                dp[i] = dp[i] + dp[i - nums[j]];
            }
        }
    }
    return dp[dp.length - 1];
}

console.log(combinationSumIV([1, 2, 3], 4));