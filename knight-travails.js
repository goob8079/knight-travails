function knightMoves(start, end) {
    if (start.length !== 2 || end.length !== 2) throw new Error('Coordinate must be in format [x, y]');
    
    const isValid = ([x, y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7;
    
    if (!isValid(start)) throw new Error('Start coordinate out of bounds!');
    
    if (!isValid(end)) throw new Error('End coordinate out of bounds!');
    
    if (start[0] === end[0] && start[1] === end[1]) {
        return [start];
    }
    
    let moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    let queue = [[start]]; // keep track of next postitions
    let visited = new Set([start.toString()]);

    // BFS
    while (queue.length > 0) {
        let path = queue.shift();
        let [a, b] = path[path.length - 1]; // current position

        // loop through the moves 
        for (const [dx, dy] of moves) {
            // calculate the best spot for the next move
            const next = [a + dx, b + dy];

            // make sure next position is within bounds and not visited
            if (isValid(next) && !visited.has(next.toString())) {
                // add new position
                const newPath = [...b, next];

                // check if the new position equals the target square
                if (next[0] === end[0] & next[1] === end[1]) {
                    console.log(`It took ${newPath.length - 1} moves. Here is the path:`);
                    newPath.forEach(pos => console.log(pos));
                    return newPath;
                }

                queue.push(newPath);
                visited.add(next.toString());
            }
        }
    }
 
}