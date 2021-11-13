function countSubstrings(s) {
    let count = 0;
    let matrix = [];
    
    // fill the matrix with zeroes
    for (let i = 0; i < s.length; i++){
        matrix.push(new Array(s.length).fill(0));
    }

    // for a single char, since they are all palindromes, makes it one
    for (let i = 0; i < matrix.length; i++){
        matrix[i][i] = 1;
        count++;
    }
    
    for (let col = 1; col < matrix.length; col++){
        for (let row = 0; row < col; row++){
            // for two chars - they are one above the diagonal
            if (row === col - 1 && s[row] === s[col]) {
                matrix[row][col] = 1;
                count++;
            }
            // for three or greater chars, look that the cell in lower left, if it is one and chars match, it is a palindrome
            if (matrix[row + 1][col - 1] === 1 && s[row] === s[col]) {
                matrix[row][col] = 1;
                count++;
            }
        }
    }
    return count;
}

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));