const current = [];
const queue = []; // keep track of next postitions
const visited = []; 

function knightMoves(start, end) {
    if (start.length < 2 || end.length < 2) throw new Error('Coordinate must be in format [x, y]');
    
    if (start[0] < 0 || start[1] > 7) throw new Error('Start coordinate out of bounds!');

    if (end[0] < 0 || end[1] > 7) throw new Error('End coordinate out of bounds!');

    
}