var snakesAndLadders = function(board) {
    let length = board.length;
    board.reverse();

    const intToPos = (square) => {
        const r = Math.floor((square - 1) / length);
        let c = (square - 1) % length;
        if (r % 2) { // if the row is odd
            c = length - 1 - c;
        }
        return [r, c];
    }; // the difficult part is converting the square into the actual coordinates
    
    const q = [[1, 0]]; // [square, moves]
    const visit = new Set();
    visit.add(1);
    
    while (q.length > 0) {
        const [square, moves] = q.shift();
        
        for (let i = 1; i < 7; i++) {
            let nextSquare = square + i;
            
            const [r, c] = intToPos(nextSquare); // coordinates are used to get what's the value in the board at that position
            
            if (board[r][c] !== -1) { // it means we find a shortcut or a snake
                nextSquare = board[r][c];
            }                   
            
            if (nextSquare === length * length) { // if this happens, we found the solution
                return moves + 1;
            }
            
            if (!visit.has(nextSquare)) {
                visit.add(nextSquare);
                q.push([nextSquare, moves + 1]); // because we have to store the nextSquare and how many moves it took to be there
            }
        }
    }
    
    return -1;
};    

