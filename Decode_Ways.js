function decodeWays(s) {
    if (s.length === 0) {
        return 0;
    }

    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s.charAt(0) === '0' ? 0 : 1;

    for (let i = 2; i < dp.length; i++){
        let oneDigit = s.substring(i - 1, i);
        let twoDigit = s.substring(i - 2, i);
        if (oneDigit >= 1) {
            dp[i] = dp[i] + dp[i - 1];
        }
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] = dp[i] + dp[i - 2];
        }
    }
    return dp[dp.length - 1];
}

console.log(decodeWays('226'));