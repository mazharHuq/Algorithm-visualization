// getting document wrapper

var docWrapper = document.querySelector(".wrapper");

class Stack {
  constructor() {
    this.counter = -1;
    this.queueCounter = 0;
    this.counter_arr = 0;
    this.pushcount = 0;
    this.popcount = 0;
    this.emptycount = 0;
    this.array = [];
    this.dom = new Dom();
    this.info = new Info();
  }

  pushBack(value) {
    if (value) {
      if (this.counter == 8) {
        this.dom.containerFull(this.array);
      } else {
        this.counter++;
        this.pushcount++;
        this.array.push(value);
        this.dom.push_backside(value, this.counter);
      }
    } else {
      this.dom.invaildInput();
    }
  }

  popBack() {
    if (this.counter >= 0) {
      if (this.array[this.counter] == undefined) {
      } else {
        let popValue = this.array.pop();
        let top_element = this.array[this.counter - 1];
        this.dom.pop_backside(top_element, popValue, this.counter);
        this.counter--;
        this.popcount++;
      }
    } else {
      this.counter = -1;
      this.dom.containerEmpty();
    }
  }

  popFront() {
    console.log(this.array);
    if (this.counter >= 0) {
      if (this.array[0] == undefined) {
      } else {
        let popValue = this.array.shift();
        let front_element = this.array[0];
        console.log(front_element);
        console.log(popValue);
        console.log(this.array);

        this.dom.pop_frontside(front_element, popValue, this.queueCounter);
        this.counter--;
        this.queueCounter++;
        this.popcount++;
      }
    } else {
      this.counter = -1;
      this.dom.containerEmpty();
    }
  }

  ispeak() {
    if (this.array[this.counter] != undefined)
      this.dom.peak_element(this.array[this.counter]);
    else this.dom.containerEmpty();
  }

  isempty() {
    if (this.counter < 0) {
      this.dom.containerEmpty();
    } else {
      this.dom.containerIsNotEmpty();
    }
  }
}

$(document).ready(function () {
  let stack = new Stack();
  let info = new Info();

  $("#push-btn").click(function () {
    document.getElementById("current_algo").innerHTML = info.push_algo;
    stack.pushBack(document.getElementById("push-item").value);
  });

  $("#pop-back-item").click(function () {
    document.getElementById("current_algo").innerHTML = info.pop_algo;
    stack.popBack();
  });

  $("#isPeak-item").click(function () {
    stack.ispeak();
  });

  $("#isEmpty-item").click(function () {
    document.getElementById("current_algo").innerHTML = info.isempty_algo;
    stack.isempty();
  });

  $("#pop-front-item").click(function () {
    document.getElementById("current_algo").innerHTML = info.pop_algo;
    stack.popFront();
  });
});
