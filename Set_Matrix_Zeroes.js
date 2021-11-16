function setZeroes(matrix) {
    let R = matrix.length;
    let C = matrix[0].length;
    let isRow = false;
    let isCol = false;

    for (let row = 0; row < R; row++){
        if (matrix[row][0] === 0) {
            isCol = true;
        }
    }

    for (let col = 0; col < C; col++){
        if (matrix[0][col] === 0) {
            isRow = true;
        }
    }

    for (let row = 1; row < R; row++){
        for (let col = 1; col < C; col++){
if (matrix[row][col] === 0) {
            matrix[row][0] = 0;
            matrix[0][col] = 0;
        }
        }
        
    }

    for ()
}
