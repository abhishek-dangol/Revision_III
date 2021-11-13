function longestPalindrome(s) {
    let longest = "";
    let matrix = [];

    for (let i = 0; i < s.length; i++){
        matrix.push(new Array(s.length).fill(0));
    }

    for (let i = 0; i < matrix.length; i++){
        matrix[i][i] = 1;
        longest = s[i];
    }

    for (let col = 1; col < matrix.length; col++){
        for (let row = 0; row < col; row++){
            let currLongest = s.substring(row, col + 1);
            if (row === col - 1 && s[row] === s[col]) {
                matrix[row][col] = 1;
                if (currLongest.length > longest.length) {
                    longest = currLongest;
                }
            }
            if (matrix[row + 1][col - 1] === 1 && s[row] === s[col]) {
                matrix[row][col] = 1;
                if (currLongest.length > longest.length) {
                    longest = currLongest;
                }
            }
        }
    }
    return longest;
}

console.log(longestPalindrome("babad"));