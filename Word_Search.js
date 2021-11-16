function exist(board, word) {
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[row].length; col++){
            if (board[row][col] === word.charAt(0) && helper(board, word, 0, row, col)) {
                return true;
            }
        }
    }
    return false;

    function helper(board, word, count, row, col) {
        if (count === word.length) {
            return true;
        }

        if (row < 0 || col < 0 || row >= board.length || col >= board[row].length || board[row][col] !== word.charAt(count)) {
            return false;
        }

        let temp = board[row][col];
        board[row][col] = "";
        let found = helper(board, word, count + 1, row + 1, col)
            || helper(board, word, count + 1, row - 1, col)
            || helper(board, word, count + 1, row, col + 1)
            || helper(board, word, count + 1, row, col - 1);
        board[row][col] = temp;
        return found;
        
    }
}

