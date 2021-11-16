function rotate(matrix) {
    let len = matrix.length;

    // transpose the matrix
    for (let row = 0; row < len; row++){
        for (let col = row; col < len; col++){
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }


    // flip horizontally
    for (let row = 0; row < len; row++){
        for (let col = 0; col < len / 2; col++){
            let temp = matrix[row][col];
            matrix[row][col] = matrix[row][len - 1 - col];
            matrix[len - 1 - col] = temp;
        }
    }
}