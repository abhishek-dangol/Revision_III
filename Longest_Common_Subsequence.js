function longestCommonSubsequence(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let matrix = [];

    for (let i = 0; i <= m; i++){
        matrix.push(new Array(n + 1).fill(0));
    }

    for (let row = 1; row <= m; row++){
        for (let col = 1; col <= n; col++){
            if (text1.charAt(row - 1) === text2.charAt(col - 1)) {
                matrix[row][col] = 1 + matrix[row - 1][col - 1];
            } else {
                matrix[row][col] = Math.max(matrix[row - 1][col], matrix[row][col - 1]);
            }
        }
    }
    return matrix[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace"));