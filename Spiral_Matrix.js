function spiralOrder(matrix) {
    const result = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let matrixSize = matrix.length * matrix[0].length;


    while (result.length < matrixSize) {
        for (let i = left; i <= right && result.length < matrixSize; i++){
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom && result.length < matrixSize; i++){
            result.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left && result.length < matrixSize; i--){
            result.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top && result.length < matrixSize; i--){
            result.push(matrix[i][left]);

        }
        left++;
    }
    return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);