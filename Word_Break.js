function wordBreak(s, wordDict) {
    let set = new Set(wordDict);
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let end = 1; end <= s.length; end++){
        for (let start = 0; start <= end; start++){
            if (dp[start] === true && set.has(s.substring(start, end))){
                dp[end] = true;
                break;
            }
        }
    }
    return dp[s.length];
}