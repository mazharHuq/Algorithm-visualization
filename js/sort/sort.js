import Bar from './bar.js';
import Explanation from './explaination.js';

class Sort {
    /*
    *@param {string} color - color of the bar
    *@param {string} initialColor - color of the bar when it is not sorted
    *@param {string} targetColor - color of the bar when it is sorted
    *@param {string} container - container of the bar
    **/
    constructor(container, arr) {
        this.container = container;
        this.barLeft = 0;
        this.arr = arr;
        this.bar = [];
        this.step = [];
        this.color = {
            initialColor: '#1fbfb8', targetColor: 'red', visitedColor: 'teal', finalColor: 'green',traverseColor: 'red',
        }
        this.render();
        this.visualizeStatus = false;
        this.currentStep = 0;
        this.speed = 200;
        this.explanation = new Explanation(this.container);
        this.selectedAlgorithm = '';

    }

    async render(arrayGenerate = true) {

        if (arrayGenerate) {
            this.generateRandomArray();
        }
        $("#array-input").val(this.arr.join(','));
        this.container.innerHTML = '';
        let left = 0;
        let top = 250;
        let width= (window.innerWidth*.8)/this.arr.length;
        this.barLeft=(width+2);
        for (let i = 0; i < this.arr.length; i++) {
            left += this.barLeft;
            let bar = new Bar(this.container, this.arr[i], left, top, i, this.color.initialColor,width);
            this.bar.push(bar);
        }

    }

    generateRandomArray() {
        let limit = Math.round(Math.random(2, 122) * 35) + 1;
        while (limit<15){
            limit = Math.round(Math.random(2, 122) * 35) + 1;
        }
        //limit = 10;
        while (limit) {
            if (limit === 0) break;
            this.arr.push(Math.round(Math.random(2, 122) * 50) + 1)
            limit--;
        }
    }

    setVisualizeStatus(status) {
        this.visualizeStatus = status;

    }

    async goUp(index, time, color = this.color.targetColor) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let el1 = document.querySelector(`[data-index="${index}"]`);
                $(el1).animate({
                    top: '+=300', backgroundColor: color,
                }, time);
                resolve();
            }, time);
        });
    }

    async goDown(index, time, color = this.color.targetColor) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let el1 = document.querySelector(`[data-index="${index}"]`);
                $(el1).animate({
                    top: '-=300', backgroundColor: color,
                }, time);
                resolve();
            }, time);
        });
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
                    left: el2.getAttribute('data-left'), backgroundColor: color,
                }, time);
                $(el2).animate({
                    left: el1.getAttribute('data-left'), backgroundColor: color,
                }, time);
                el1.setAttribute('data-left', el2.getAttribute('data-left'));
                el2.setAttribute('data-left', temp);
                el1.setAttribute('data-index', index2);
                el2.setAttribute('data-index', index1);
                resolve(() => {

                });
            }, time);

        });
    }


    async visualize() {
        for (let i = this.currentStep; i < this.step.length; i++) {
            if (this.visualizeStatus === false) break;
            let swappingNode = this.step[i];
            if (swappingNode.type === 'check') {
                await this.colorNodes(swappingNode.firstNode, this.color.visitedColor, this.speed);
                if(swappingNode.secondNode !== undefined){
                await this.colorNodes(swappingNode.secondNode, this.color.visitedColor, this.speed);
                this.explanation.setMessage(`${swappingNode.firstNode} and ${swappingNode.secondNode} are checked`);
                }else {
                    let nodeElement = document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
                    if (this.algorithm === 'insertionSort') {
                        this.explanation.setMessage(`Check if `+nodeElement.innerHTML + ` is in the right position`);
                    }else if(this.algorithm === 'selectionSort'){
                        this.explanation.setMessage(`Check if `+nodeElement.innerHTML + ` is the smallest element`);
                    }
                }

            } else if (swappingNode.type === 'swap') {
                await this.swap(swappingNode.firstNode, swappingNode.secondNode, this.color.targetColor, this.speed);
                let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
                let el2=document.querySelector(`[data-index="${swappingNode.secondNode}"]`);
                this.explanation.setMessage(`Swap ${el1.innerHTML} and ${el2.innerHTML}`);

                if(this.algorithm ==='selectionSort'){

                   await this.colorNodes(swappingNode.secondNode, this.color.visitedColor, this.speed);
                     await this.colorNodes(swappingNode.firstNode, this.color.finalColor, this.speed);
                }
            } else if (swappingNode.type === 'sorted') {
                await this.colorNodes(swappingNode.firstNode, this.color.finalColor, this.speed);
                let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
                this.explanation.setMessage(`${el1.innerHTML} is sorted`);
            } else if (swappingNode.type === 'reset') {
                await this.reset();
            } else if (swappingNode.type === 'goUp') {
                await this.goUp(swappingNode.firstNode, this.speed, this.color.targetColor);
                let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
                this.explanation.setMessage(`Finding position for ${el1.innerHTML}`);
            } else if (swappingNode.type === 'goDown') {
                await this.goDown(swappingNode.firstNode, this.speed, this.color.finalColor);
                let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
                this.explanation.setMessage(`${el1.innerHTML} is in the right position`);
            } else if (swappingNode.type === 'min') {
                await this.colorNodes(swappingNode.firstNode, this.color.targetColor, parseInt(this.speed / 2));
                let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
                this.explanation.setMessage(`${el1.innerHTML} is the minimum`);

            }else if (swappingNode.type === 'max') {
                await this.colorNodes(swappingNode.firstNode, this.color.targetColor, parseInt(this.speed / 2));
            }else if (swappingNode.type === 'initialColor') {
                await this.colorNodes(swappingNode.firstNode, this.color.initialColor, parseInt(this.speed / 2));
            }else if (swappingNode.type === 'traverse') {
                await this.colorNodes(swappingNode.firstNode, this.color.traverseColor, parseInt(this.speed / 2));
            }else if (swappingNode.type === 'allSorted') {
                for (let i = 0; i < this.bar.length; i++) {
                    await this.colorNodes(i, this.color.finalColor, parseInt(this.speed / 10));
                }
                this.explanation.setMessage(`All elements are sorted`);
            }
            else if (swappingNode.type === 'colorTillFirst') {
                for (let i = 0; i < this.bar.length; i++) {
                    if (i < swappingNode.firstNode) {
                        await this.colorNodes(i, this.color.finalColor, parseInt(this.speed / 10));
                    }
                }
            }
            this.currentStep++;
            console.log(this.currentStep);
        }
    }


    bubbleSort() {

        for (let i = 0; i < this.arr.length - 1; i++) {
            for (let j = 0; j < this.arr.length - i - 1; j++) {
                let action = {
                    firstNode: j, secondNode: j + 1, type: 'check',


                }
                this.step.push(action);
                if (this.arr[j] > this.arr[j + 1]) {
                    let swappingNode = {
                        firstNode: j, secondNode: j + 1, type: 'swap',
                    }
                    this.step.push(swappingNode);
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = temp;
                }
                if (this.arr.length - i - 2 === j) {
                    let action = {
                        firstNode: j + 1, secondNode: j + 1, type: 'sorted',
                    }
                    this.step.push(action);
                }
            }
        }
    }

    async goBack() {
        if (this.currentStep > 0) {
            this.visualizeStatus = false;
            this.currentStep--;
            let swappingNode = this.step[this.currentStep];
            await this.actionWithStep(swappingNode);

        }else{
            this.explanation.setMessage(`No more steps`);
        }
    }

    async goForward() {
        if (this.currentStep < this.step.length - 1) {
            this.visualizeStatus = false;

            let swappingNode = this.step[this.currentStep];
            await this.actionWithStep(swappingNode);
            this.currentStep++;
        }
    }

    async actionWithStep(swappingNode) {
        let time = 10;
        if (swappingNode.type === 'check') {
            await this.colorNodes(swappingNode.firstNode, this.color.visitedColor, this.speed);
            if(swappingNode.secondNode !== undefined){
                await this.colorNodes(swappingNode.secondNode, this.color.visitedColor, this.speed);
                this.explanation.setMessage(`${swappingNode.firstNode} and ${swappingNode.secondNode} are checked`);
            }else {
                let nodeElement = document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
                if (this.algorithm === 'insertionSort') {
                    this.explanation.setMessage(`Check if `+nodeElement.innerHTML + ` is in the right position`);
                }else if(this.algorithm === 'selectionSort'){
                    this.explanation.setMessage(`Check if `+nodeElement.innerHTML + ` is the smallest element`);
                }
            }

        } else if (swappingNode.type === 'swap') {
            await this.swap(swappingNode.firstNode, swappingNode.secondNode, this.color.targetColor, this.speed);
            let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
            let el2=document.querySelector(`[data-index="${swappingNode.secondNode}"]`);
            this.explanation.setMessage(`Swap ${el1.innerHTML} and ${el2.innerHTML}`);

            if(this.algorithm ==='selectionSort'){

                await this.colorNodes(swappingNode.secondNode, this.color.visitedColor, this.speed);
                await this.colorNodes(swappingNode.firstNode, this.color.finalColor, this.speed);
            }
        } else if (swappingNode.type === 'sorted') {
            await this.colorNodes(swappingNode.firstNode, this.color.finalColor, this.speed);
            let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
            this.explanation.setMessage(`${el1.innerHTML} is sorted`);
        } else if (swappingNode.type === 'reset') {
            await this.reset();
        } else if (swappingNode.type === 'goUp') {
            await this.goUp(swappingNode.firstNode, this.speed, this.color.targetColor);
            let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
            this.explanation.setMessage(`Finding position for ${el1.innerHTML}`);
        } else if (swappingNode.type === 'goDown') {
            await this.goDown(swappingNode.firstNode, this.speed, this.color.finalColor);
            let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
            this.explanation.setMessage(`${el1.innerHTML} is in the right position`);
        } else if (swappingNode.type === 'min') {
            await this.colorNodes(swappingNode.firstNode, this.color.targetColor, parseInt(this.speed / 2));
            let el1=document.querySelector(`[data-index="${swappingNode.firstNode}"]`);
            this.explanation.setMessage(`${el1.innerHTML} is the minimum`);

        }else if (swappingNode.type === 'max') {
            await this.colorNodes(swappingNode.firstNode, this.color.targetColor, parseInt(this.speed / 2));
        }else if (swappingNode.type === 'initialColor') {
            await this.colorNodes(swappingNode.firstNode, this.color.initialColor, parseInt(this.speed / 2));
        }else if (swappingNode.type === 'traverse') {
            await this.colorNodes(swappingNode.firstNode, this.color.traverseColor, parseInt(this.speed / 2));
        }else if (swappingNode.type === 'allSorted') {
            for (let i = 0; i < this.bar.length; i++) {
                await this.colorNodes(i, this.color.finalColor, parseInt(this.speed / 10));
            }
            this.explanation.setMessage(`All elements are sorted`);
        }
        else if (swappingNode.type === 'colorTillFirst') {
            for (let i = 0; i < this.bar.length; i++) {
                if (i < swappingNode.firstNode) {
                    await this.colorNodes(i, this.color.finalColor, parseInt(this.speed / 10));
                }
            }
        }

    }


    async reset() {
        this.visualizeStatus = false;
        this.currentStep = 0;
        this.step = [];
       await this.render(false);
    }
   async resetToNew() {
        return new Promise((resolve, reject) => {
            this.visualizeStatus = false;
            this.currentStep = 0;
            this.step = [];
            let input = $('#array-input').val();
            let array = input.split(',');

            for (let i = 0; i < array.length; i++) {
                array[i] = parseInt(array[i]);
            }

            this.setVisualizeStatus(false);
            this.setArray(array);


            this.render(false).then(() => {

                resolve();

            });
        });
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
        });

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
            let time = parseInt(this.speed);
            if (this.visualizeStatus === true) {
                this.currentStep = i + 1;
                if (this.step[i].type === 'swap') {
                    let firstNode = this.step[i].firstNode;
                    let secondNode = this.step[i].secondNode;
                    let firstNodeValue = document.querySelector(`[data-index="${firstNode}"]`).innerHTML;
                    let secondNodeValue = document.querySelector(`[data-index="${secondNode}"]`).innerHTML;
                    this.explanation.setMessage(`Swap ${firstNodeValue} and ${secondNodeValue}`);
                    await this.swap(this.step[i].firstNode, this.step[i].secondNode, this.color.targetColor, time);
                    await this._initializeColor(firstNode, secondNode, this.color.initialColor, time / 3);
                } else if (this.step[i].type === 'check') {
                    let firstNodeValue = document.querySelector(`[data-index="${this.step[i].firstNode}"]`).innerHTML;
                    let secondNodeValue = document.querySelector(`[data-index="${this.step[i].secondNode}"]`).innerHTML;
                    this.explanation.setMessage(`Check ${firstNodeValue} and ${secondNodeValue}`);
                    await this.checkTwoNodes(this.step[i].firstNode, this.step[i].secondNode, time);
                    await this._initializeColor(this.step[i].firstNode, this.step[i].secondNode, this.color.initialColor, time / 3);
                } else if (this.step[i].type === 'sorted') {
                    this.explanation.setMessage(`Sorted ${this.step[i].secondNode}`);
                    await this.colorNodes(this.step[i].secondNode, this.color.finalColor, time);
                }
                console.log(this.speed);

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
        });
    }


   async setArray(array) {
        this.arr = [];
        this.arr = array;
        this.visualizeStatus = false;
        this.currentStep = 0;
        this.step = [];
       await this.render(false);

    }
    //function for windows clear interval


    setAlgorithm(selectedAlgorithm) {
        this.algorithm = selectedAlgorithm;
        console.log()
    }

    async startVisualize() {
        this.visualizeStatus = false;
        this.currentStep = 0;
        this.step = [];
        await this.render(false);

        if (this.algorithm === 'bubbleSort') {
            this.bubbleSort();
            this.visualizeStatus = true;
         await   this.visuaLizeBubbleSort();
        } else if (this.algorithm === 'insertionSort') {
          await  this.insertionSort();

        } else if (this.algorithm === 'selectionSort') {
          await  this.selectionSort();
            // this.visualizeStatus = true;
            //this.visuaLizeSelectionSort();
        } else if (this.algorithm === 'mergeSort') {
           await this.mergeSort();
            // this.visualizeStatus = true;
            //this.visuaLizeMergeSort();
        }
    }

    async insertionSort() {
        this.step = [];
        for (let i = 1; i < this.arr.length; i++) {
            let currentValue = this.arr[i];
            let j = i - 1;
            this.step.push({
                type: 'goUp', firstNode: i,
            });
            this.step.push({
                type:'colorTillFirst',
                firstNode: i,
            });

            for (j; j >= 0; j--) {
                if (this.arr[j] > currentValue) {
                    this.arr[j + 1] = this.arr[j];
                    this.step.push({
                        firstNode: j, secondNode: j + 1, type: 'swap',
                    });
                    this.step.push({
                        firstNode: j+1, type: 'sorted',
                    });
                    if (j === 0) {
                        this.step.push({
                            firstNode: j, type: 'goDown',
                        });
                    }
                } else {
                    this.step.push({
                        type: "goDown", firstNode: j + 1
                    });
                    break;
                }
            }
            this.arr[j + 1] = currentValue;
        }
        this.visualizeStatus = true;
        this.step.push({
            type:'allSorted',
        });
        this.currentStep = 0;
        this.selectedAlgorithm = 'insertionSort';
        await this.visualize();

    }

    async selectionSort() {
        this.step = [];

        for (let i = 0; i < this.arr.length; i++) {
            let min = i;
            this.step.push({
                type: 'min', firstNode: i,
            });
            for (let j = i + 1; j < this.arr.length; j++) {
                this.step.push({type: 'check', firstNode: j});
                if (this.arr[j] < this.arr[min]) {
                    this.step.push({
                        type: 'initialColor', firstNode: min,
                    });
                    min = j;
                    this.step.push({
                        type: 'min', firstNode: j,
                    });
                }else {
                    this.step.push({
                        type: 'initialColor', firstNode: j,
                    });
                }

            }
            if (min !== i) {
                let temp = this.arr[i];
                this.arr[i] = this.arr[min];
                this.arr[min] = temp;
                this.step.push({
                    firstNode: i, secondNode: min, type: 'swap',
                });
            }else {
                this.step.push({
                    type: 'sorted', firstNode: i,
                });
            }
        }
        this.step.push({
            type:'allSorted',
        });

        this.visualizeStatus = true;
        this.currentStep = 0;
        await this.visualize();
    }


    async mergeSort() {

        this.step = [];
        this.currentStep = 0;
        this.visualizeStatus = true;
        this.arr = await this.mergeSortHelper(this.arr, 0, this.arr.length - 1);


    }

    async mergeSortHelper(arr, left, right) {
        if(this.visualizeStatus === false) return ;

        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            for (let i = left; i < mid; i++) {
                this.step.push({
                    type: 'color', firstNode: i
                });
                await this.colorNodes(i, this.color.targetColor, this.speed);
            }

            await this.mergeSortHelper(arr, left, mid);

            for (let i = mid + 1; i <= right; i++) {
                this.step.push({
                    type: 'color', firstNode: i
                });
                await this.colorNodes(i, "red", this.speed);
            }

            await this.mergeSortHelper(arr, mid + 1, right);

            await this.merge(arr, left, mid, right);

        }

        return arr;
    }

    async merge(arr, left, mid, right) {
        if(this.visualizeStatus === false) return ;
        let positionChange = [];


        let leftArr = arr.slice(left, mid + 1);
        let rightArr = arr.slice(mid + 1, right + 1);
        let i = 0;
        let j = 0;
        let k = left;
        let leftElement = document.querySelector(`[data-index="${left}"]`);
        let startingLeft = parseInt(leftElement.dataset.left);
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] <= rightArr[j]) {
                positionChange.push({
                    index: k, changedValue: left + i,
                });
                arr[k] = leftArr[i];
                i++;
                this.step.push({
                    type: 'goUp', firstNode: k,
                });
                await this.goUp(k, this.speed);

            } else {
                positionChange.push({
                    index: k, changedValue: mid + j + 1,
                });
                arr[k] = rightArr[j];
                j++;
                this.step.push({
                    type: 'goUp', firstNode: k,
                });

                await this.goUp(k, this.speed);
            }
            k++;

        }
        while (i < leftArr.length) {
            if(this.visualizeStatus === false) return ;
            positionChange.push({
                index: k, changedValue: left + i,
            });

            arr[k] = leftArr[i];
            i++;

            this.step.push({
                type: 'color', firstNode: k,
            });
            this.step.push({
                type: 'goUp', firstNode: k,
            });
            await this.colorNodes(k, "black", this.speed);
            await this.goUp(k, this.speed);
            k++;

        }
        while (j < rightArr.length) {
            if(this.visualizeStatus === false) return ;
            positionChange.push({
                index: k, changedValue: mid + j + 1,
            });
            arr[k] = rightArr[j];
            j++;
            this.step.push({
                type: 'color', firstNode: k,
            });
            this.step.push({type: 'goUp', firstNode: k});
            await this.colorNodes(k, "black", this.speed);
            await this.goUp(k, this.speed);
            k++;

        }
        console.log(positionChange);
        for (let i = 0; i < positionChange.length; i++) {
            if(this.visualizeStatus === false) return ;
            let el = document.querySelector(`[id="${positionChange[i].changedValue}"]`);
            el.setAttribute('data-index', positionChange[i].index);

        }
        for (let i = left; i <= right; i++) {
            if(this.visualizeStatus === false) return ;
            await this.colorNodes(i, "black", this.speed);
            await this.goTopLeft(i, 300, startingLeft, this.speed);
            let el = document.querySelector(`[data-index="${i}"]`);
            el.setAttribute('id', i);
            el.setAttribute('data-left', startingLeft);

            startingLeft +=  this.barLeft;

        }

    }

    async goLeft(k, left, time = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $(`[data-index="${k}"]`).animate({
                    left: `${left}px`,
                }, time);
                resolve();
            }, time);
        });
    }

    async goTopLeft(index, top, left, time = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $(`[data-index="${index}"]`).animate({
                    top: '-=300', left: `${left}px`, color: 'red',
                }, time);
                resolve();
            }, time);
        });
    }

    async goRight(k, number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $(`[data-index="${k}"]`).animate({
                    top: '-=left',
                }, number);
                resolve();
            }, number);
        });

    }

    randomReset() {
        this.arr = [];
        this.step = [];
        this.currentStep = 0;
        this.visualizeStatus = false;
       this.render();
    }
}

export default Sort;