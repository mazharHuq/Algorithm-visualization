class Bar{
    constructor(container,value,left,top,index,color){
        this.value = value;
        this.left = left;
        this.top = top;
        this.index = index;
        this.container = container;
        this.color = color;
        this.render();
    }

    render(){
        let el=document.createElement('li');
    
        el.style.height = this.value*5+'px';
        el.style.width = '25px';
        el.style.left = this.left+'px';
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        el.style.backgroundColor = randomColor;
        el.setAttribute('data-value',this.value);
        el.setAttribute('data-left',this.left);
        el.setAttribute('data-top',this.top);
        el.setAttribute('data-bottom',this.top+this.value*5);
        el.setAttribute('data-index',this.index);
        el.setAttribute('id',this.index);
        let text = document.createElement('span');
        text.innerHTML = this.value;
        el.appendChild(text);
        this.container.appendChild(el);
        
    }

    
    goLeft(){
       
    }
    goRight=()=>{
       
    }
    goTop(){
       
    }
    goBottom(){
    }

}
export default Bar;