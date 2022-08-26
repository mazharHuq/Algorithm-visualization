/// PQ
//helper class for PriorityQueue
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class buildGraph {
    graph = {};

    constructor(_graphInfo, _grid) {
        this.visited = {};
        //this.steps = [];
        this.grid = _grid;
        this.graphInfo = _graphInfo;
        this.isLabeled = false;
        this.labelMap = [];
        this.ugrid = [];
        this.pathNode = [];
        this.shortestCost = 0;
        this.isFound = false;
    }


    setGrid(_grid, _ugrid) {
        this.grid = _grid;
        this.ugrid = _ugrid;
        console.log("working");
    }

    setLebelMap(labelMap) {
        this.labelMap = labelMap;
        this.isLabeled = true;
    }

    setGraphInfo(isWeighted, isDirected) {
        this.graphInfo = {
            isWeighted: isWeighted,
            isDirected: isDirected,
            edgeColor: "#848484",
        };
    }

    makeNode(nodeNum) {
        var node = {};
        node["id"] = nodeNum + "";
        if (this.isLabeled == false) {
            node["label"] = nodeNum + "";
        } else {
            node["label"] = this.labelMap[nodeNum] + "";
        }
        this.visited[nodeNum] = true;

        return node;
    }

    getGraph() {
        var nodes = [];
        var edges = [];
        var edge = {};
        this.visited = {};

        for (var i in this.grid) {
            // parent/index node
            if (!this.visited.hasOwnProperty(i)) {
                nodes.push(this.makeNode(i));
            }

            // child node
            for (var j = 0; j < this.grid[i].length; j++) {
                // child nodes
                if (!this.visited.hasOwnProperty(this.grid[i][j][0])) {
                    nodes.push(this.makeNode(this.grid[i][j][0]));
                }

                // build edge
                edge = {};

                edge["id"] = i + "" + this.grid[i][j][0];
                edge["to"] = i + "";
                edge["from"] = this.grid[i][j][0] + "";
                edge["color"] = this.graphInfo.edgeColor;

                if (this.graphInfo.isWeighted) {
                    edge["label"] = this.grid[i][j][1] + "";
                }

                if (this.graphInfo.isDirected) {
                    edge["arrows"] = {from: true};
                }

                edges.push(edge);
            }
        }

        return {nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges)};
    }


    getUnDirectedGraph() {
        var nodes = [];
        var edges = [];
        var edge = {};
        this.visited = {};

        for (var i in this.grid) {
            // parent/index node
            if (!this.visited.hasOwnProperty(i)) {
                nodes.push(this.makeNode(i));
            }

            // child node
            for (var j = 0; j < this.grid[i].length; j++) {
                // child nodes
                if (!this.visited.hasOwnProperty(this.grid[i][j][0])) {
                    nodes.push(this.makeNode(this.grid[i][j][0]));
                }

                // build edge
                edge = {};

                edge["id"] = i + "" + this.grid[i][j][0];
                edge["to"] = i + "";
                edge["from"] = this.grid[i][j][0] + "";
                edge["color"] = this.graphInfo.edgeColor;

                if (this.graphInfo.isWeighted) {
                    edge["label"] = this.grid[i][j][1] + "";
                }

                if (this.graphInfo.isDirected) {
                    edge["arrows"] = {from: true};
                }

                edges.push(edge);
            }
        }

        return {nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges)};
    }

    dbg(msg) {
        console.log(msg);
    }

    getUnWeightedBfsSteps(source, destination) {
        this.dbg(source);
        this.dbg(destination);
        // queue structure using array
        var queue = [];

        this.visited = {};
        this.visited[source] = true;

        queue.push(source);

        let flag = 0;
        let steps = [];
        let step = {};
        let path = {};

        while (queue.length > 0) {
            let u = queue.shift();
            this.dbg(u);

            flag = 0;
            if (u == null || u == undefined || u == "") {
                continue;
            }
            for (let i = 0; i < grid[u].length; i++) {
                if (!this.visited.hasOwnProperty(grid[u][i][0])) {
                    queue.push(grid[u][i][0]);
                    this.visited[grid[u][i][0]] = true;

                    step = {};
                    step["fromNodeID"] = u + "";
                    step["toNodeID"] = grid[u][i][0] + "";
                    step["isPath"] = false;
                    steps.push(step);

                    path[grid[u][i][0]] = u + "";

                    if (grid[u][i][0] == destination) {
                        flag = 1;
                        break;
                    }
                }
            }

            if (flag) break;
        }

        let nodeOrder = [];
        if (flag) {
            // shortest path exist

            let stack = [];
            stack.push(destination);
            nodeOrder.push(destination + "");

            while (1) {
                if (!path.hasOwnProperty(destination)) {
                    break;
                }
                nodeOrder.push(path[destination] + "");
                destination = path[destination];
            }
            this.pathNode = nodeOrder;
            for (var inx = 0; inx < nodeOrder.length - 1; inx++) {
                for (var i = 0; i < steps.length; i++) {
                    if (
                        steps[i].toNodeID == nodeOrder[inx] &&
                        steps[i].fromNodeID == nodeOrder[inx + 1]
                    ) {

                        steps[i]["isPath"] = true;
                    }
                }
            }
        } else if(destination == ""){
            for (var i = 0; i < steps.length; i++) {
                steps[i]["isPath"] = true;
            }
        }
        return steps;
    }

    getUnDirectedBfsSteps(source, destination) {
        this.dbg(source);
        this.dbg(destination);
        // queue structure using array
        var queue = [];

        this.visited = {};
        this.visited[source] = true;

        queue.push(source);

        let flag = 0;
        let steps = [];
        let step = {};
        let path = {};

        while (queue.length > 0) {
            let u = queue.shift();
            this.dbg(u);

            flag = 0;
            if (u == null || u == undefined || u == "") {
                continue;
            }
            for (let i = 0; i < this.ugrid[u].length; i++) {
                if (!this.visited.hasOwnProperty(this.ugrid[u][i][0])) {
                    queue.push(this.ugrid[u][i][0]);
                    this.visited[this.ugrid[u][i][0]] = true;

                    step = {};
                    step["fromNodeID"] = u + "";
                    step["toNodeID"] = this.ugrid[u][i][0] + "";
                    step["isPath"] = false;
                    steps.push(step);

                    path[this.ugrid[u][i][0]] = u + "";

                    if (this.ugrid[u][i][0] == destination) {
                        flag = 1;
                        break;
                    }
                }
            }

            if (flag) break;
        }

        let nodeOrder = [];
        if (flag) {
            // shortest path exist

            let stack = [];
            stack.push(destination);
            nodeOrder.push(destination + "");

            while (1) {
                if (!path.hasOwnProperty(destination)) {
                    break;
                }
                nodeOrder.push(path[destination] + "");
                destination = path[destination];
            }

            for (var inx = 0; inx < nodeOrder.length - 1; inx++) {
                for (var i = 0; i < steps.length; i++) {
                    if (
                        steps[i].toNodeID == nodeOrder[inx] &&
                        steps[i].fromNodeID == nodeOrder[inx + 1]
                    ) {
                        steps[i]["isPath"] = true;
                    }
                }
            }
        }

        return steps;
    }

    getUnWeightedDfsSteps(source, destination) {
        // stack structure using array
        let stack = [];

        this.visited = {};
        this.visited[source] = true;

        stack.push([source, source]);

        let flag = 0;
        let steps = [];
        let step = {};
        let path = {};

        while (stack.length > 0) {
            let currentNode = stack.pop();
            console.log(currentNode);
            step = {};
            step["fromNodeID"] = currentNode[1] + "";
            step["toNodeID"] = currentNode[0] + "";
            step["isPath"] = false;
            if (currentNode[0] != currentNode[1]) {
                steps.push(step);
            }
            flag = 0;
            let u = currentNode[0];
            for (let i = 0; i < grid[u].length; i++) {
                if (!this.visited.hasOwnProperty(grid[u][i][0])) {
                    stack.push([grid[u][i][0], u]);
                    this.visited[grid[u][i][0]] = true;

                    path[grid[u][i][0]] = u + "";

                    if (grid[u][i][0] == destination) {
                        step = {};
                        step["fromNodeID"] = u + "";
                        step["toNodeID"] = grid[u][i][0] + "";
                        step["isPath"] = false;
                        steps.push(step);
                        flag = 1;
                        break;
                    }
                }
            }

            if (flag) break;
        }

        let nodeOrder = [];
        if (flag) {
            // shortest path exist

            let stack = [];
            stack.push(destination);
            nodeOrder.push(destination + "");

            while (1) {
                if (!path.hasOwnProperty(destination)) {
                    break;
                }
                nodeOrder.push(path[destination] + "");
                destination = path[destination];
            }
            this.pathNode = nodeOrder;
            for (var inx = 0; inx < nodeOrder.length - 1; inx++) {
                for (var i = 0; i < steps.length; i++) {
                    if (
                        steps[i].toNodeID == nodeOrder[inx] &&
                        steps[i].fromNodeID == nodeOrder[inx + 1]
                    ) {
                        steps[i]["isPath"] = true;
                    }
                }
            }
        } else if(destination == ""){
            for (var i = 0; i < steps.length; i++) {
                steps[i]["isPath"] = true;
            }
        }
        this.dbg("steps");
        return steps;
    }

    getWeightedDijkstraSteps(source, destination) {
        // priorityQuye structure using array
        let priorityQueue = new PriorityQueue();
        this.visited = {};

        priorityQueue.enqueue([source, 0]);

        let flag = 0;
        let steps = [];
        let step = {};
        let path = {};
        let stepStack = [];
        let parent = [];
        var costs = [];
        this.shortestCost = 0;
        this.isFound = false;
        for (let node in this.grid) {
            parent[node] = null;
            costs[node] = Number.MAX_VALUE;
        }
        costs[source] = 0;
        while (priorityQueue.values.length > 0) {
            let uu = priorityQueue.dequeue().val;
            if (uu == NaN || uu == undefined || uu == "") {
                continue;
            }
            let u = uu[0];
            let cost = uu[1];
            if (this.visited.hasOwnProperty(u)) {
                continue;
            }
            if (u != source) {
                step = {};
                step["fromNodeID"] = parent[u] + "";
                step["toNodeID"] = u + "";
                step["isPath"] = false;
                steps.push(step);
                path[u] = parent[u] + "";
                this.shortestCost += 0;
            }
            if (u == destination) {
                this.shortestCost = cost;
                flag = 1;
                this.isFound = true;
                break;
            }
            this.visited[source] = true;
            flag = 0;

            for (var i = 0; i < grid[u].length; i++) {
                if (!this.visited.hasOwnProperty(grid[u][i][0])) {
                    let v = grid[u][i][0];
                    let newCost = grid[u][i][1];
                    if (newCost < costs[v] - cost) {

                        costs[v] = newCost + cost;
                        parent[v] = u;
                        priorityQueue.enqueue([v, costs[v]]);
                    }
                }
            }
        }

        let nodeOrder = [];
        if (flag) {
            // shortest path exist

            let stack = [];
            stack.push(destination);
            nodeOrder.push(destination + "");

            while (1) {
                if (!path.hasOwnProperty(destination)) {
                    break;
                }
                nodeOrder.push(path[destination] + "");
                destination = path[destination];
            }
            this.pathNode = nodeOrder;
            for (var inx = 0; inx < nodeOrder.length - 1; inx++) {
                for (var i = 0; i < steps.length; i++) {
                    if (
                        steps[i].toNodeID == nodeOrder[inx] &&
                        steps[i].fromNodeID == nodeOrder[inx + 1]
                    ) {
                        steps[i]["isPath"] = true;
                    }
                }
            }
        }else if (destination == ""){
            for (var i = 0; i < steps.length; i++) {
                steps[i]["isPath"] = true;
            }
        }
        return steps;
    }
}
