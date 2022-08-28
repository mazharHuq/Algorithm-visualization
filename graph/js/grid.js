function log(message) {
    console.log(message);
}

class Grid {
    /*
     *@param {number} x
     *@param {number} y
     *@return {Cell}
     */
    obstacle = [];
    speed = 1;

    constructor(width, height, cellSize, startButton, startX, startY, endX, endY) {
        this.startIcon = "🏍";
        this.endIcon = "🏁";
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cells = [];
        this.color = {
            path: "yellow", start: "green", current: "blue", visited: "#afd8f8",
        }
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.init();
    }
    reset(width, height, cellSize, startButton, startX, startY, endX, endY) {
       document.getElementById("grid").innerHTML = "";
        confirm("Are you sure you want to reset the grid?");

        this.startIcon = "🏍";
        this.endIcon = "🏁";
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cells = [];
        this.color = {
            path: "yellow", start: "green", current: "blue", visited: "#afd8f8",
        }
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.init();
    }

    init() {

        const windowHeight = window.innerHeight*.90;
        const windowWidth = window.innerWidth*.60;
        let gridElement = document.getElementById("grid");
        gridElement.style.width = windowWidth + "px";
        gridElement.style.height = windowHeight + "px";
        gridElement.style.gridTemplateColumns = "repeat(" + this.width + ", " + 1 + "fr)";
        for (let i = 0; i < this.width; i++) {

            this.obstacle[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.obstacle[i][j] = 0;
            }
        }
        $("#start").attr("canHover", "false");//for setting obstacle


        for (let i = 0; i < this.width; i++) {
            this.cells[i] = [];

            for (let j = 0; j < this.height; j++) {
                this.cells[i][j] = new Cell(i, j, this.cellSize);

                let el = document.createElement("div");
                el.addEventListener("dragstart", this.dragStart);
                el.addEventListener("dragover", this.allowDrop);
                el.addEventListener("dragend", this.dragEnd);
                el.addEventListener("drop", this.drop);
                el.addEventListener("mouseover", this.onHover);

                el.id = "cell-" + i + "-" + j;
                el.className = "cell";
                el.dataset.x = i;
                el.dataset.y = j;
                el.dataset.isObstacle = false;
                el.dataset.isStart = false;
                el.dataset.isEnd = false;

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
        this.setStart(this.startX, this.startY);
        this.setEnd(this.endX, this.endY);

    }

    //function for drag and drop the start and end cell
    dragStart(event) {

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
        //start icon
        //end icon
        event.preventDefault();
        let data = event.dataTransfer;
        console.log(event.dataTransfer);
        let id = data.getData("text");
        let cellElement = document.getElementById(id);
        let text = cellElement.innerHTML;

        event.target.innerHTML = text;


        if (text === "🏍") {
            alert("start cell is set");
            event.target.style.backgroundColor = "green";
            this.startX = event.target.dataset.x;
            this.startY = event.target.dataset.y;
            $("#start").attr("data-startX", event.target.dataset.x);
            $("#start").attr("data-startY", event.target.dataset.y);

        } else if (text ==="🏁") {
            this.endX = event.target.dataset.x;
            this.endY = event.target.dataset.y;
            event.target.style.backgroundColor = "red";
            $("#start").attr("data-endX", this.endX);
            $("#start").attr("data-endY", this.endY);

        }
        cellElement.style.backgroundColor = "white";
        cellElement.innerHTML = "";


    }

    onHover(event) {
        console.log(event)
        let element = document.querySelector("[data-x='" + event.target.dataset.x + "'][data-y='" + event.target.dataset.y + "']");
        if(element.dataset.isStart === "true" || element.dataset.isEnd === "true") {
            event.preventDefault();return;
        }

        if ($("#start").attr("canHover") === "true") {

            let isObstacle = element.dataset.isObstacle;
            let x = parseInt(event.target.dataset.x);
            let y = parseInt(event.target.dataset.y);
            if (isObstacle === "true") {
                console.log(this.obstacle);
                element.dataset.isObstacle = "false";
                element.style.backgroundColor = "white";
            } else if (isObstacle === "false") {

                element.dataset.isObstacle = "true";
                element.style.backgroundColor = "black";
            }
        }
    }

    setHoverable(x) {
        $("#start").attr("canHover", x);
    }


    //set the start and end cell
    setStart(x, y) {
        document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").innerHTML = this.startIcon;

        let element = document.querySelector("[data-x='" + x + "'][data-y='" + y + "']");
        element.attributes.draggable = "true";
        document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").dataset.isStart = "true";
    }

    setEnd(x, y) {
        let element = document.querySelector("[data-x='" + x + "'][data-y='" + y + "']");
       element.attributes.draggable = "true";

        document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").innerHTML = this.endIcon;
        document.querySelector("[data-x='" + x + "'][data-y='" + y + "']").dataset.isEnd = "true";

    }

    //await the cell to be colored
    colorCell(x, y, color) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let cellElement = document.querySelector("[data-x='" + x + "'][data-y='" + y + "']");
                cellElement.style.backgroundColor = color;
                resolve("colored");
            }, this.speed);
        });
    }

    setSpeed(speed) {
        speed = parseFloat(speed).toFixed(3);
        this.speed = parseInt(10 * speed);
    }

    //color cell with bfs algorithm  until finding the end cell
    async bfsUntilEnd(color, x, y, a, b) {
        x=$("#start").attr("data-startX");
        y=$("#start").attr("data-startY");
        a=$("#start").attr("data-endX");
        b=$("#start").attr("data-endY");
        x=parseInt(x);
        y=parseInt(y);
        a=parseInt(a);
        b=parseInt(b);
        let colorSequence = [];
        let queue = [];
        let pathTrack = [];
        let isPathFound = false;


        for (let i = 0; i < this.width; i++) {
            pathTrack[i] = [];
            for (let j = 0; j < this.height; j++) {
                pathTrack[i][j] = 0;
                let cellElement = document.querySelector("[data-x='" + i + "'][data-y='" + j + "']");
                if (cellElement.dataset.isObstacle === "true") this.obstacle[i][j] = 1;
            }
        }

        //a for endX and b for endY
        queue.push([x, y]);
        while (queue.length > 0) {
            let currentCell = queue.shift();
            let currentX = currentCell[0];
            let currentY = currentCell[1];
            let cellElement = document.querySelector("[data-x='" + currentX + "'][data-y='" + currentY + "']");
            if (currentX === a && currentY === b) {
                isPathFound = true;
                cellElement.style.backgroundColor = "red";
                for (let i = 0; i < colorSequence.length; i++){
                    await this.colorCell(colorSequence[i][0], colorSequence[i][1], this.color.current);
                   if(i>0) await this.colorCell(colorSequence[i-1][0], colorSequence[i-1][1], this.color.visited);
                }
                await this.colorCell(colorSequence[colorSequence.length-1][0], colorSequence[colorSequence.length-1][1], this.color.visited);
                let finalPath = [];
                while (1) {
                    let nextStep = pathTrack[a][b];
                    if (nextStep === 0) {
                        console.log("no path");
                        break;
                    }
                    a = nextStep[0];
                    b = nextStep[1];
                    finalPath.push([a, b]);
                }

                while (finalPath.length > 0) {
                    let nextStep = finalPath.pop();
                    await this.colorCell(nextStep[0], nextStep[1], this.color.path);
                }
                console.log("colorSequence: ", finalPath);
                break;
            }
            if (this.obstacle[currentX][currentY] === 1) {
                this.colorCell(currentX, currentY, "black");
                continue;
            }
            if (cellElement.dataset.visited === "true") continue;
            if (currentCell[0] === x && currentCell[1] === y) {
                cellElement.style.backgroundColor = "red";
            } else colorSequence.push(currentCell);

            // await this.colorCell(currentX, currentY, color);
            cellElement.dataset.visited = true;
            let neighbors = this.getNeighbors2(currentX, currentY);


            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let neighborX = neighbor[0];
                let neighborY = neighbor[1];
                let neighborElement = document.querySelector("[data-x='" + neighborX + "'][data-y='" + neighborY + "']");

                if (neighborElement.dataset.visited === "false") {
                    queue.push([neighborX, neighborY]);
                    pathTrack[neighborX][neighborY] = [currentX, currentY];
                }
            }
        }
        if (!isPathFound) {

            for (let i = 0; i < colorSequence.length; i++) {
                await this.colorCell(colorSequence[i][0], colorSequence[i][1], color);
                if (i > 0) await this.colorCell(colorSequence[i - 1][0], colorSequence[i - 1][1], "yellow");

            }
        }
    }

    //color cell with dfs algorithm  until finding the end cell
    async DfsUntilEnd(color, x, y, a, b) {
        x=$("#start").attr("data-startX");
        y=$("#start").attr("data-startY");
        a=$("#start").attr("data-endX");
        b=$("#start").attr("data-endY");
        x=parseInt(x);
        y=parseInt(y);
        a=parseInt(a);
        b=parseInt(b);
        let colorSequence = [];
        let isPathFound = false;
        let queue = [];
        let pathTrack = [];
        for (let i = 0; i < this.width; i++) {
            pathTrack[i] = [];
            for (let j = 0; j < this.height; j++) {
                pathTrack[i][j] = 0;
                let cellElement = document.querySelector("[data-x='" + i + "'][data-y='" + j + "']");
                if (cellElement.dataset.isObstacle == "true") {
                    this.obstacle[i][j] = 1;

                }

            }
        }


        queue.push([x, y]);
        while (queue.length > 0) {
            let currentCell = queue.pop();
            let currentX = currentCell[0];
            let currentY = currentCell[1];
            let cellElement = document.querySelector("[data-x='" + currentX + "'][data-y='" + currentY + "']");

            if (currentX === a && currentY === b) {
                isPathFound = true;
                cellElement.style.backgroundColor = "red";
                for (let i = 0; i < colorSequence.length; i++){
                    await this.colorCell(colorSequence[i][0], colorSequence[i][1], this.color.current);
                    if(i>0) await this.colorCell(colorSequence[i-1][0], colorSequence[i-1][1], this.color.visited);
                }
                await this.colorCell(colorSequence[colorSequence.length-1][0], colorSequence[colorSequence.length-1][1], this.color.visited);
                let finalPath = [];
                while (1) {
                    let nextStep = pathTrack[a][b];
                    if (nextStep === 0) {
                        console.log("no path");
                        break;
                    }
                    a = nextStep[0];
                    b = nextStep[1];
                    finalPath.push([a, b]);
                }

                while (finalPath.length > 0) {
                    let nextStep = finalPath.pop();
                    await this.colorCell(nextStep[0], nextStep[1], this.color.path);
                }
                console.log("colorSequence: ", finalPath);
                break;
            }

            if (this.obstacle[currentX][currentY] === 1) {
                this.colorCell(currentX, currentY, "black");
                continue;
            }

            if (cellElement.dataset.visited === "true") continue;
            if (currentCell[0] === x && currentCell[1] === y) {
                cellElement.style.backgroundColor = "red";
            } else colorSequence.push(currentCell);

            // await this.colorCell(currentX, currentY, color);
            cellElement.dataset.visited = true;
            let neighbors = this.getNeighbors(currentX, currentY);

            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let neighborX = neighbor[0];
                let neighborY = neighbor[1];
                let neighborElement = document.querySelector("[data-x='" + neighborX + "'][data-y='" + neighborY + "']");

                if (neighborElement.dataset.visited == "false") {
                    queue.push([neighborX, neighborY]);
                    pathTrack[neighborX][neighborY] = [currentX, currentY];
                }
            }
        }
    }

    //get the neighbors of a cell
    getNeighbors(x, y) {
        let neighbors = [];

        if (x > 0) {
            neighbors.push([x - 1, y]);
        }


        if (y > 0) {
            neighbors.push([x, y - 1]);
        }
        if (x < this.width - 1) {
            neighbors.push([x + 1, y]);
        }
        if (y < this.height - 1) {
            neighbors.push([x, y + 1]);
        }



        return neighbors;
    }
    getNeighbors2(x, y) {
        let neighbors = [];


        if (y < this.height - 1) {
            neighbors.push([x, y + 1]);
        }
        if (x < this.width - 1) {
            neighbors.push([x + 1, y]);
        }
        if (y > 0) {
            neighbors.push([x, y - 1]);
        }
        if (x > 0) {
            neighbors.push([x - 1, y]);
        }



        return neighbors;

    }
}

class Cell {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = "white";
    }
}
