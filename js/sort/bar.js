class Bar{
    constructor(container,value,left,top,index,color,width=0){
        this.value = value;
        this.left = left;
        this.top = top;
        this.index = index;
        this.container = container;
        this.color = color;
        this.width = width;
        this.render();
    }

    render(){

        let el=document.createElement('li');
    
        el.style.height = this.value*7+'px';
        el.style.width = this.width+'px';
        el.style.left = this.left+'px';
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        el.style.backgroundColor = '#97C2FC';
        el.setAttribute('data-value',this.value);
        el.setAttribute('data-left',this.left);
        el.setAttribute('data-top',this.top);
        el.setAttribute('data-bottom',this.top+this.value*5);
        el.setAttribute('data-index',this.index);
        el.setAttribute('id',this.index);
        let text = document.createElement('span');
        text.style.color = '#fff';
        text.style.textAlign = 'center';
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