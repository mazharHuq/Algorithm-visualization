function log(message) {
  console.log(message);
}
class Grid {
  /*
   *@param {number} x
   *@param {number} y
   *@return {Cell}
   */
  constructor(width, height, cellSize) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.cells = [];
   
    this.colorSequence = [];
    this.pathTrack1 = [];
   this.startX = 3;
    this.startY = 4;
    this.endX = this.width - 1;
    this.endY = this.height - 1;
    this.init();
    console.log("grid initialized");

  }

  init() {
    const windowWidth = window.innerWidth * 0.8;
    const windowHeight = window.innerHeight * 0.85;
    let gridElement = document.getElementById("grid");
    gridElement.style.width = windowWidth + "px";
    gridElement.style.height = windowHeight + "px";
    gridElement.style.gridTemplateColumns =
      "repeat(" + this.width + ", " + 1 + "fr)";

    for (let i = 0; i < this.width; i++) {
      this.cells[i] = [];

      for (let j = 0; j < this.height; j++) {
        this.cells[i][j] = new Cell(i, j, this.cellSize);

        let el = document.createElement("div");
        el.addEventListener("dragstart", this.dragStart);
        el.addEventListener("dragover", this.allowDrop);
        el.addEventListener("dragend", this.dragEnd);
        el.addEventListener("drop", this.drop);

        el.id = "cell-" + i + "-" + j;
        el.className = "cell";
        el.dataset.x = i;
        el.dataset.y = j;

        el.dataset.visited = false;
        el.style.width = windowWidth / this.width + "px";
        el.style.height = windowHeight / this.height + "px";
        //set background color to white
        el.style.backgroundColor = "white";
        //set a html value to the cell
      
        gridElement.appendChild(el);

        //add the cell to the grid
      }
    }
    console.log(this.startX, this.startY);
    this.setStart(this.startX, this.startY);
    this.setEnd(this.endX, this.endY);
    
  }
  //function for drag and drop the start and end cell
  dragStart(event) {
    console.log("dragstart");
    event.dataTransfer.setData("text", event.target.id);
  }
  dragEnd(event) {
    event.preventDefault();
    console.log("dragEnd");
  }
  //function for allowing the cell to be dropped
  allowDrop(event) {
    event.preventDefault();
    console.log("allowDrop");
  }
  //function for dropping the cell
  drop(event) {
    console.log("drop");
    event.preventDefault();
    let data = event.dataTransfer ;
    console.log(data);
    let id = data.getData("text");
    let cellElement = document.getElementById(id);
   
   
   let text = cellElement.innerHTML;
   event.target.innerHTML = text;
   if(text == "S"){
    event.target.style.backgroundColor = "green";
    this.startX = event.target.dataset.x;
    this.startY = event.target.dataset.y;
    console.log(this.startX, this.startY);
   }else if(text == "E"){
    this.endX = event.target.dataset.x;
    this.endY = event.target.dataset.y;
    console.log(this.endX, this.endY);
      event.target.style.backgroundColor = "red";
      console.log("chnged");
    }
    cellElement.style.backgroundColor = "white";
    cellElement.innerHTML = "";
    console.log(this.startX, this.startY);
    console.log(this.endX, this.endY);
    
  }


  //set the start and end cell
  setStart(x, y) {
    console.log(x, y);
    
   document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").style.backgroundColor = "green";
   document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").innerHTML = "S";
  }
  setEnd(x, y) {
    
    document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").innerHTML = "E";
    this.endX=x;
    this.endY;

    document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").style.backgroundColor = "red";
  }

  //await the cell to be colored
  colorCell(x, y, color) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let cellElement = document.querySelector(
          "[data-x='" + x + "'][data-y='" + y + "']"
        );
        cellElement.style.backgroundColor = color;
        resolve("colored");
      }, 25);
    });
  }
  //color cell with bfs algorithm  until finding the end cell
  async bfsUntilEnd( color) {
    let x=this.startX;
    let  y=this.startY;
    let a=this.endX;
     let b=this.endY;
    console.log(x, y, a, b);
    let colorSequence = [];
    log("bfsUntilEnd");
    let queue = [];
    let pathTrack = [];
    let obstacle = [];
    for (let i = 0; i < this.width; i++) {
      pathTrack[i] = [];
      obstacle[i] = [];
      for (let j = 0; j < this.height; j++) {
        pathTrack[i][j] = 0;
        obstacle[i][j] = 0;
        if (i == 6) obstacle[i][j] = 1;
      }
    }

    obstacle[6][7] = 0;

    queue.push([x, y]);
    while (queue.length > 0) {
      let currentCell = queue.shift();
      let currentX = currentCell[0];
      let currentY = currentCell[1];
      let cellElement = document.querySelector(
        "[data-x='" + currentX + "'][data-y='" + currentY + "']"
      );
      if (currentX == a && currentY == b) {
        cellElement.style.backgroundColor = "red";
        this.backtrack(currentX, currentY, color);
        //  colorSequence.reverse();
        for (let i = 0; i < colorSequence.length; i++) {
          await this.colorCell(colorSequence[i][0], colorSequence[i][1], color);
        }
        let x = 10;
        let xx = a,
          yy = b;
        while (x) {
          let nextStep = pathTrack[xx][yy];
          if (nextStep == 0) break;
          xx = nextStep[0];
          yy = nextStep[1];
          await this.colorCell(xx, yy, "red");
        }
        console.log("colorSequence: ", pathTrack[a][b]);
        break;
      }
      if (obstacle[currentX][currentY] == 1) {
        this.colorCell(currentX, currentY, "black");
        continue;
      }

      if (cellElement.dataset.visited == "true") continue;
      if (currentCell[0] == x && currentCell[1] == y) {
        cellElement.style.backgroundColor = "red";
      } else colorSequence.push(currentCell);

      // await this.colorCell(currentX, currentY, color);
      cellElement.dataset.visited = true;
      let neighbors = this.getNeighbors(currentX, currentY);

      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        let neighborX = neighbor[0];
        let neighborY = neighbor[1];
        let neighborElement = document.querySelector(
          "[data-x='" + neighborX + "'][data-y='" + neighborY + "']"
        );
        if (neighborElement.dataset.visited == "false") {
          queue.push([neighborX, neighborY]);
          pathTrack[neighborX][neighborY] = [currentX, currentY];
        }
      }
    }
  }

  //color cell with dfs algorithm  until finding the end cell
  async DfsUntilEnd(x, y, color, a, b) {
    let colorSequence = [];
    log("DfsUntilEnd");
    let queue = [];
    let pathTrack = [];
    let obstacle = [];
    for (let i = 0; i < this.width; i++) {
      pathTrack[i] = [];
      obstacle[i] = [];
      for (let j = 0; j < this.height; j++) {
        pathTrack[i][j] = 0;
        obstacle[i][j] = 0;
        if (i == 6) obstacle[i][j] = 1;
      }
    }

    obstacle[6][7] = 0;

    queue.push([x, y]);
    while (queue.length > 0) {
      let currentCell = queue.pop();
      let currentX = currentCell[0];
      let currentY = currentCell[1];
      let cellElement = document.querySelector(
        "[data-x='" + currentX + "'][data-y='" + currentY + "']"
      );

      if (currentX == a && currentY == b) {
        cellElement.style.backgroundColor = "red";
        this.backtrack(currentX, currentY, color);
        //  colorSequence.reverse();
        for (let i = 0; i < colorSequence.length; i++) {
          await this.colorCell(colorSequence[i][0], colorSequence[i][1], color);
        }
        let x = 10;
        let xx = a,
          yy = b;
        while (x) {
          let nextStep = pathTrack[xx][yy];
          if (nextStep == 0) break;
          xx = nextStep[0];
          yy = nextStep[1];
          await this.colorCell(xx, yy, "red");
        }
        console.log("colorSequence: ", pathTrack[a][b]);
        break;
      }

      if (obstacle[currentX][currentY] == 1) {
        this.colorCell(currentX, currentY, "black");
        continue;
      }

      if (cellElement.dataset.visited == "true") continue;
      if (currentCell[0] == x && currentCell[1] == y) {
        cellElement.style.backgroundColor = "red";
      } else colorSequence.push(currentCell);

      // await this.colorCell(currentX, currentY, color);
      cellElement.dataset.visited = true;
      let neighbors = this.getNeighbors(currentX, currentY);

      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        let neighborX = neighbor[0];
        let neighborY = neighbor[1];
        let neighborElement = document.querySelector(
          "[data-x='" + neighborX + "'][data-y='" + neighborY + "']"
        );

        if (neighborElement.dataset.visited == "false") {
          queue.push([neighborX, neighborY]);
          pathTrack[neighborX][neighborY] = [currentX, currentY];
        }
      }
    }
    /*
    if (isDestinationFound) {
      while (pathTrack[a][b] != [[x][y]]) {
        let _a = pathTrack[a][b][0];
        let _b = pathTrack[a][b][1];
        a = _a;
        b = _b;
        console.log(a, b);
      }
    }*/
  }

  //get the neighbors of a cell
  getNeighbors(x, y) {
    let neighbors = [];
    if (x > 0) {
      neighbors.push([x - 1, y]);
    }
    if (x < this.width - 1) {
      neighbors.push([x + 1, y]);
    }
    if (y > 0) {
      neighbors.push([x, y - 1]);
    }
    if (y < this.height - 1) {
      neighbors.push([x, y + 1]);
    }
    return neighbors;
  }

  //function for backtracking the path from the end cell to the start cell
  async backtrack(x, y, color) {}
}

class Cell {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = "white";
  }
}
