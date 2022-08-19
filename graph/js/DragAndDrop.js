class DragAndDrop{
    constructor(element, callback){
        this.element = element;
        this.callback = callback;
        this.element.addEventListener('dragstart', this.dragStart.bind(this));
        this.element.addEventListener('dragend', this.dragEnd.bind(this));
    }
    dragStart(e){
        this.element.classList.add('dragging');
        this.callback(e);
    }
    dragEnd(e){
        this.element.classList.remove('dragging');
        this.callback(e);
    }
    drop(e){    
        this.element.classList.remove('dragging');
        this.callback(e);
    }
}