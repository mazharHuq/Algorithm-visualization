class Bar{
    constructor(x, y, width, height, data, color,ctx){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.data = data;
        this.color = color;
        this.ctx = ctx;
        this.data= this.generateRandomData(this.data, 50, 25);
        console.log(this.data);
        this.init(this.ctx, this.data, this.color);
       
       
    }


    //initialize the bar graph
    async init(ctx){
        this.ctx = ctx;
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        
        let barColor= "black";
        this.createBar(this.ctx, this.data, barColor);
    }
    //generate random data for the bar graph
     generateRandomData(data, max,size){
        for(let i = 0; i < size; i++){
            data[i] = Math.floor(Math.random() * max);
        }
        return data;
    }


    //function for creating the bar graph
     createBar(ctx, data, color){
        let max = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i] > max){
                max = data[i];
            }
        }
        console.log(max);
        let startingX = 20;
        let startingY = 60;
        this.width = this.width/data.length-20;
        console.log(this.width);
        for(let i = 0; i < data.length; i++){

            ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16); ;
            ctx.fillRect(startingX, startingY, this.width, data[i]*10);
            ctx.save();
            startingX  +=  this.width+3;
        }
    }
    //transition the bar graph
    


    //function for creating the x axis labels for the bar graph
    async createXAxisLabels(ctx, data){
        for(let i = 0; i < data.length; i++){
            ctx.fillStyle = "black";
            ctx.fillText(data[i], this.x, this.y + this.height + 20);
            this.x += this.width + 1;
        }
    }


    //function for creating random data for the bar graph
    async createRandomData(data, max){
        for(let i = 0; i < data.length; i++){
            data[i] = Math.floor(Math.random() * max);
        }
    }



    draw(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}