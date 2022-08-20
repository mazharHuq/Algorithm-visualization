import Bar from './bar.js';
import Explanation from './explaination.js';

class Sort {
    /*
    *@param {string} color - color of the bar
    *@param {string} initialColor - color of the bar when it is not sorted
    *@param {string} targetColor - color of the bar when it is sorted
    *@param {string} container - container of the bar
    **/
    constructor(container,arr) {
        this.container = container;
        this.arr = arr;
        this.bar = [];
        this.step = [];
        this.color = {
            initialColor: 'gray',
            targetColor: 'blue',
            visitedColor: '#0000ff',
            finalColor: 'green',
        }
        this.render();
        this.visualizeStatus = false;
        this.currentStep = 0;
        this.speed = 50;
        this.explanation=new Explanation(this.container);

    }
    render(arrayGenerate = true) {
        
        if(arrayGenerate){
        this.generateRandomArray();
        }
        $("#array-input").val(this.arr.join(','));
        console.log(this.arr);
        this.container.innerHTML = '';
        let left = 0;
        let top = 250;
        for (let i = 0; i < this.arr.length; i++) {
            left += 30;
            let bar = new Bar(this.container, this.arr[i], left, top, i, this.color.initialColor);
            this.bar.push(bar);
        }
    }
    generateRandomArray() {
        let limit = Math.round(Math.random(2, 122) * 20) + 1;
        while (limit) {
            if (limit === 0) break;
            this.arr.push(Math.round(Math.random(2, 122) * 50) + 1)
            limit--;
        }
    }
    setVisualizeStatus(status) {
        this.visualizeStatus = status;

    }


    async swap(index1, index2, color, time = 1000) {
        let temp = this.arr[index1];
        this.arr[index1] = this.arr[index2];
        this.arr[index2] = temp;
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                let el1 = document.querySelector(`[data-index="${index1}"]`);
                let el2 = document.querySelector(`[data-index="${index2}"]`);
                let temp = el1.getAttribute('data-left');

                $(el1).animate({
                    left: el2.getAttribute('data-left'),
                    backgroundColor: color,
                }, time);
                $(el2).animate({
                    left: el1.getAttribute('data-left'),
                    backgroundColor: color,
                }, time);
                el1.setAttribute('data-left', el2.getAttribute('data-left'));
                el2.setAttribute('data-left', temp);
                el1.setAttribute('data-index', index2);
                el2.setAttribute('data-index', index1);
                resolve(() => {

                });
            }, time);

        }
        );
    }


    async actionWithTwoNodes(node, time) {

        setTimeout(() => {
            let firstElement = document.querySelector(`[data-index="${node.firstNode}"]`);
            let secondElement = document.querySelector(`[data-index="${node.secondNode}"]`);
            if (node.type === 'check') {
                this.checkTwoNodes(firstElement, secondElement);
            }
            else if (node.type === 'swap') {
                this.swap(node.firstNode, node.secondNode, this.color.targetColor, time);

            } else if (node.type === 'sorted') {
                this.colorNodes(node.secondNode, this.color.finalColor);
            }

        }, time);


    }




    bubbleSort() {

        for (let i = 0; i < this.arr.length - 1; i++) {
            for (let j = 0; j < this.arr.length - i - 1; j++) {
                let action = {
                    firstNode: j,
                    secondNode: j + 1,
                    type: 'check',


                }
                this.step.push(action);
                if (this.arr[j] > this.arr[j + 1]) {
                    let swappingNode = {
                        firstNode: j,
                        secondNode: j + 1,
                        type: 'swap',
                    }
                    this.step.push(swappingNode);
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = temp;
                }
                if (this.arr.length - i - 2 === j) {
                    let action = {
                        firstNode: j + 1,
                        secondNode: j + 1,
                        type: 'sorted',
                    }
                    this.step.push(action);
                }
            }
        }
    }
    async goBack() {
        if (this.currentStep > 0) {
            this.currentStep--;
            let swappingNode = this.step[this.currentStep];
            await this.actionWithTwoNodes(swappingNode, 150);
        }
    }
    async reset() {
        this.visualizeStatus = false;
        this.currentStep = 0;
        this.arr = [];
        this.step = [];
        this.render();
    }

    async colorNodes(index2, color, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let el1 = document.querySelector(`[data-index="${index2}"]`);
                $(el1).animate({
                    backgroundColor: color,
                }, time);
                resolve();
            }, time);
        }
        );

    }

    async goForward() {
        if (this.currentStep < this.step.length - 1) {

            let swappingNode = this.step[this.currentStep];
            await this.swap(swappingNode.firstNode, swappingNode.secondNode, 150);
            this.currentStep++;
        }
    }
    async checkTwoNodes(index1, index2, time = 1000) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {

                let el1 = document.querySelector(`[data-index="${index1}"]`);
                let el2 = document.querySelector(`[data-index="${index2}"]`);
                el1.animate({
                    backgroundColor: this.color.targetColor,
                }, time);
                el2.animate({
                    backgroundColor: this.color.targetColor,
                }, time);
                resolve();
            }, time);
        });

    }

    async visuaLizeBubbleSort() {
        this.explanation.showExplanation();
        this.explanation.setMessage('Bubble Sort');

        for (let i = this.currentStep; i < this.step.length; i++) {
            let time = parseInt(10000 / this.speed);
            if (this.visualizeStatus === true) {
                this.currentStep = i + 1;
                if (this.step[i].type === 'swap') {
                    let firstNode = this.step[i].firstNode;
                    let secondNode = this.step[i].secondNode;
                    let firstNodeValue=document.querySelector(`[data-index="${firstNode}"]`).innerHTML;
                    let secondNodeValue=document.querySelector(`[data-index="${secondNode}"]`).innerHTML;
                    this.explanation.setMessage(`Swap ${firstNodeValue} and ${secondNodeValue}`);
                    await this.swap(this.step[i].firstNode, this.step[i].secondNode, this.color.targetColor, time);
                    await this._initializeColor(firstNode, secondNode, this.color.initialColor, time / 3);
                } else if (this.step[i].type === 'check') {
                   let firstNodeValue=document.querySelector(`[data-index="${this.step[i].firstNode}"]`).innerHTML;
                     let secondNodeValue=document.querySelector(`[data-index="${this.step[i].secondNode}"]`).innerHTML;
                    this.explanation.setMessage(`Check ${firstNodeValue} and ${secondNodeValue}`);
                    await this.checkTwoNodes(this.step[i].firstNode, this.step[i].secondNode, time);
                    await this._initializeColor(this.step[i].firstNode, this.step[i].secondNode, this.color.initialColor, time / 3);
                } else if (this.step[i].type === 'sorted') {
                    this.explanation.setMessage(`Sorted ${this.step[i].secondNode}`);
                    await this.colorNodes(this.step[i].secondNode, this.color.finalColor, time);
                    console.log(this.step[i].secondNode);
                }
                console.log(this.currentStep);

            } else {
                break;
            }
            console.log(this.visualizeStatus);


        }
    }
    async _initializeColor(index1, index2, color, time = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let el1 = document.querySelector(`[data-index="${index1}"]`);
                let el2 = document.querySelector(`[data-index="${index2}"]`);
                $(el1).animate({
                    backgroundColor: color,
                }, time);
                $(el2).animate({
                    backgroundColor: color,
                }, time);
                resolve();
            }, time);
        }
        );
    }


    setArray(array) {
        this.arr=[];
        this.arr = array;
        this.visualizeStatus = false;
        this.currentStep = 0;
        this.step = [];
        this.render(false);

    }

    setAlgorithm(selectedAlgorithm) {
        this.algorithm = selectedAlgorithm;
        console.log()
    }
    startVisualize() {
        if(this.algorithm==='bubbleSort'){
            this.bubbleSort();
            this.visualizeStatus = true;
            this.visuaLizeBubbleSort();
        }
    }
}
export default Sort;