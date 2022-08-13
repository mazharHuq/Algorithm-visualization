class buildGraph {
  constructor(_graphInfo, _grid) {
    this.visited = {};
    //this.steps = [];
    this.priorityQueue = new PriorityQueue();
    this.grid = _grid;
    this.graphInfo = _graphInfo;
  }

  makeNode(nodeNum) {
    var node = {};
    node["id"] = nodeNum + "";
    node["label"] = nodeNum + "";
    this.visited[nodeNum] = true;

    return node;
  }

  getGraph() {
    var nodes = [];
    var edges = [];
    var edge = {};
    this.visited = {};

    for (var i in grid) {
      // parent/index node
      if (!this.visited.hasOwnProperty(i)) {
        nodes.push(this.makeNode(i));
      }

      // child node
      for (var j = 0; j < grid[i].length; j++) {
        // child nodes
        if (!this.visited.hasOwnProperty(grid[i][j][0])) {
          nodes.push(this.makeNode(grid[i][j][0]));
        }

        // build edge
        edge = {};

        edge["id"] = i + "" + grid[i][j][0];
        edge["to"] = i + "";
        edge["from"] = grid[i][j][0] + "";
        edge["color"] = this.graphInfo.edgeColor;

        if (this.graphInfo.isWeighted) {
          edge["label"] = grid[i][j][1] + "";
        }

        if (this.graphInfo.isDirected) {
          edge["arrows"] = { from: true };
        }

        edges.push(edge);
      }
    }

    return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
  }

  getUnWeightedBfsSteps(source, destination) {
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

      flag = 0;

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

  getWeightedDijkstraSteps(source, destination) {
    // priorityQuye structure using array
    let priorityQueue = this.priorityQueue;
    this.visited = {};
    this.visited[source] = true;

    priorityQueue.push(source);

    let flag = 0;
    let steps = [];
    let step = {};
    let path = {};
    let stepStack = [];

    while (priorityQueue.size() > 0) {
      let u = priorityQueue.pop();
      console.log(u);
      flag = 0;

      for (var i = 0; i < grid[u].length; i++) {
        if (!this.visited.hasOwnProperty(grid[u][i][0])) {
          console.log(grid[u][i][0]);
          priorityQueue.push(grid[u][i][0]);
          this.visited[grid[u][i][0]] = true;

          step = {};
          step["fromNodeID"] = u + "";
          step["toNodeID"] = grid[u][i][0] + "";
          step["isPath"] = false;
          stepStack.push(step);

          path[grid[u][i][0]] = u + "";

          if (grid[u][i][0] == destination) {
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
}
