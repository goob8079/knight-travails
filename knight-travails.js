function knightMoves(start, end) {
    if (start.length < 2 || end.length < 2) throw new Error('Coordinate must be in format [x, y]');
    
    const isValid = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;
    
    if (!isValid([start[0], start[1]])) throw new Error('Start coordinate out of bounds!');
    
    if (!isValid([end[0], end[1]])) throw new Error('End coordinate out of bounds!');
    
    if (start[0] === end[0] && start[1] === end[1]) {
        return [start];
    }
    
    let moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 1], [-1, -2]
    ];

    let queue = [start]; // keep track of next postitions
    let visited = new Set([start.toString()]);

    while (queue.length > 0) {
        
    }

    
}