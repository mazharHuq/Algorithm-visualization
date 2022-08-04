function log(message) {
    console.log(message);
}
class Grid{

    /*
    *@param {number} x 
    *@param {number} y
    *@return {Cell}
    */
    constructor(width, height, cellSize){
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cells = [];
        this.init();
        this.colorSequence = [];
    }


    init(){
        const windowWidth = window.innerWidth*0.9;
        const windowHeight = window.innerHeight*0.9;
        let gridElement = document.getElementById("grid");
        gridElement.style.width = windowWidth + "px";
        gridElement.style.height =windowHeight + "px";
        gridElement.style.gridTemplateColumns = "repeat(" + this.width + ", " + 1 + "fr)";
        
        for(let i = 0; i < this.width; i++){
            this.cells[i] = [];
            for(let j = 0; j < this.height; j++){
                
                this.cells[i][j] = new Cell(i, j, this.cellSize);
                let el= document.createElement("div");
                el.className = "cell";
                el.dataset.x = i;
                el.dataset.y = j;
                
                el.dataset.visited = false;
                el.style.width = windowWidth/this.width + "px";
                el.style.height =windowHeight/this.height + "px";
                //set background color to white
                el.style.backgroundColor = "white";
              //set a html value to the cell
                el.innerHTML = i+j;
                
                gridElement.appendChild(el);

                //add the cell to the grid
        
            }
        }
       
    }

    //await the cell to be colored
    colorCell(x, y, color){

        return new Promise(
            resolve=>{
                setTimeout(() => {
                   let cellElement = document.querySelector("[data-x='" + x + "'][data-y='" + y + "']");
                     cellElement.style.backgroundColor = color;
                    resolve("colored");
                }, 25);
            }
        );
    }
    //color cell with bfs algorithm  until finding the end cell
    async bfsUntilEnd(x, y, color,a,b){
        let colorSequence = [];
        log("bfsUntilEnd");
        let queue = [];
        let Path= [];
        
        queue.push([x, y]); 
        while(queue.length > 0 ){
            let currentCell = queue.shift();
            let currentX = currentCell[0];
            let currentY = currentCell[1];
            let cellElement = document.querySelector("[data-x='" + currentX + "'][data-y='" + currentY + "']");
            if(currentX == a && currentY == b){
                cellElement.style.backgroundColor = "red";
                this.backtrack(currentX, currentY, color);
              //  colorSequence.reverse();
                for(let i = 0; i < colorSequence.length; i++){
                    await this.colorCell(colorSequence[i][0], colorSequence[i][1], color);
                }
                console.log("colorSequence: " , colorSequence);
                return;
            }

           if(cellElement.dataset.visited == "true") continue;
           if(currentCell[0] == x && currentCell[1] == y){
                cellElement.style.backgroundColor = "red";
                
            }else 
            colorSequence.push(currentCell);
            Path[currentX][currentY] = [currentX, currentY];


          // await this.colorCell(currentX, currentY, color);
            cellElement.dataset.visited = true;
            let neighbors = this.getNeighbors(currentX, currentY);
        
           
            for(let i = 0; i < neighbors.length; i++){
                let neighbor = neighbors[i];
                let neighborX = neighbor[0];
                let neighborY = neighbor[1];
                let neighborElement = document.querySelector("[data-x='" + neighborX + "'][data-y='" + neighborY + "']");
                if(neighborElement.dataset.visited == "false"){
                
                    queue.push([neighborX, neighborY]);
                }
            }
        }

       
       
       
    }


    //color cell with dfs algorithm  until finding the end cell
    


    //get the neighbors of a cell
    getNeighbors(x, y){

        let neighbors = [];
        if(x > 0){
            neighbors.push([x - 1, y]);
        }
        if(x < this.width - 1){
            neighbors.push([x + 1, y]);
        }
        if(y > 0){
            neighbors.push([x, y - 1]);
        }
        if(y < this.height - 1){
            neighbors.push([x, y + 1]);
        }
        return neighbors;
    }

    //function for backtracking the path from the end cell to the start cell
    async backtrack(x, y, color){
       
    }


  






}

class Cell{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = "white";
       
    }
    
}
