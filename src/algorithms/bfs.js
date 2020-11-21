
export function bfs(grid,startNode,finishNode){
    const visitedNodesInOrder = [];
    const stack = [];
    startNode.distance = 0;
    stack.push(startNode);
    while(!!stack.length){
        const closestNode = stack.shift();
        console.log(closestNode.isVisited);
        if (closestNode.isWall) continue;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if (closestNode === finishNode) return visitedNodesInOrder;
        const neighbors =getNeighbors(closestNode,grid);
        for (let neighbor of neighbors){
            stack.push(neighbor);
        }
        //console.log(stack);
    }
    console.log("krishna  ");
}

function getNeighbors(node,grid){
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    for (let neighbor of neighbors){
        if (!neighbor.isVisited)
            neighbor.previousNode = node;
    }
    return neighbors.filter((neighbor) => !neighbor.isVisited);
    
}

/*
function getAllNodes(grid){
    const nodes= [];
    for (const row of grid){
        for (const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}
*/

export function getNodesInShortestPathOrderBfs(finishNode){
    let currentNode = finishNode;
    const nodesInShortestPathOrder = [];
    while (currentNode !== null){
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}









/*
export function bfs(grid,startNode,finishNode){
    const visitedNodesInOrder = [];
    const queue = [];
    startNode.distance = 0;
    queue.push(startNode);
    while(!!queue.length){
        let closestNode = queue.shift();
        if (closestNode.isWall) continue;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if (closestNode === finishNode) return visitedNodesInOrder;
        let neighbors =getNeighbors(closestNode,grid);
        for (let neighbor of neighbors){
            queue.push(neighbor);
        }
        console.log(queue);
        
    }
}

function getNeighbors(node,grid){
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    for (let neighbor of neighbors){
        if (!neighbor.isVisited)
            neighbor.previousNode = node;
    }
    return neighbors.filter((neighbor) => !neighbor.isVisited);
    
}

export function getNodesInShortestPathOrderBfs(finishNode){
    let currentNode = finishNode;
    const nodesInShortestPathOrder = [];
    while (currentNode !== null){
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}
*/