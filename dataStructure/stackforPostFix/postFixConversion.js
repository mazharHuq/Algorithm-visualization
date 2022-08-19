class PostFix {
  constructor() {
    this.stack = new Stack();
    this.array = [];
    this.postFixArray = [];
    this.counter = 0;
    this.root = 0;
    let graphInfob = {
      edgeColor: "#548694",
      isDirected: true,
      isWeighted: true,
    };
    this.grid = {};
    let graph;
    this.map = [];
  }

  setGraph() {
    this.graph = new buildGraph(this.graphInfob, this.grid);
  }

  box_create(array) {
    if (array) {
      this.stack.box_create(array);
    } else {
      this.stack.invaildInput();
    }
  }

  showOnPostFixBox(value, id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          $("#a" + id).css("border", "2px solid #548694");
          $("#postFixArray").append(
            '<div id="r' +
              this.counter +
              1 +
              '" class="stack_box">  ' +
              value +
              " </div>"
          );
          this.showIterationOnArray(id);
          this.counter++;
        } else {
          this.stack.invaildInput();
        }
        resolve("done");
      }, 1000);
    });
  }

  showIterationOnArray(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        $("#a" + id).css("border", "2px solid #548694");
        resolve("done");
      }, 0);
    });
  }

  rank(value) {
    if ("^" == value) return 5;
    else if ("/" == value) return 4;
    else if ("*" == value) return 3;
    else return 2;
  }

  async postFixConversion(str) {
    if (array) {
      $("#postFixArray").empty();
      let ret = "";
      let st = [];
      for (let i = 0; i < str.length; i++) {
        //await this.showIterationOnArray(i);
        if (str[i] >= "a" && str[i] <= "z") {
          await this.showOnPostFixBox(str[i], i);
          ret += str[i];
        } else if (str[i] == "(") {
          st.push(str[i]);
        } else if (str[i] == ")") {
          while (st.length > 0) {
            let top = st.pop();
            if (top == "(") {
              st.push(top);
              break;
            }
            ret += top;
            await this.showOnPostFixBox(top, i);
          }
          if (st.length > 0) st.pop();
        } else {
          while (st.length > 0) {
            let top = st.pop();
            if (this.rank(top) > this.rank(str[i]) && top != "(") {
              console.log(this.rank(top), this.rank(str[i]));
              ret += top;
              await this.showOnPostFixBox(top, i);
            } else {
              st.push(top);
              break;
            }
          }
          st.push(str[i]);
        }
      }
      while (st.length > 0) {
        let top = st.pop();
        ret += top;
        await this.showOnPostFixBox(top, this.array.length - 1);
      }
      return ret;
    } else {
      this.stack.invaildInput();
    }
  }

  makeGraph(array) {
    if (array) {
      this.array = array;
      let grid = {};
      let stackArray = [];
      let nodeNumber = 1;
      this.map = {};
      console.log(array);
      for (let i = 0; i < array.length; i++) {
        if (array[i] >= "a" && array[i] <= "z") {
          stackArray.push([nodeNumber, array[i]]);
          this.map[nodeNumber] = [array[i]];
          nodeNumber++;
        } else {
          let a = stackArray.pop()[0];
          let b = stackArray.pop()[0];
          let node = "" + nodeNumber;
          grid[node] = [
            [a, 1],
            [b, 1],
          ];
          this.map[nodeNumber] = array[i];
          stackArray.push([nodeNumber, array[i]]);
          nodeNumber++;
        }
      }
      if (stackArray.length > 0) {
        this.root = stackArray.pop()[0];
      }
      this.grid = grid;
      console.log(grid);
      return grid;
    } else {
      this.stack.invaildInput();
    }
  }
}

$(document).ready(function () {
  let postFix = new PostFix();
  $("#postFix").click(function () {
    let value = document.getElementById("push-item").value;
    postFix.box_create(value);
    let postExpression = postFix.postFixConversion(value);
    postFix.makeGraph(postExpression);
    postFix.setGraph(postFix.grid);

    let graphInfob = {
      edgeColor: "#548694",

      isDirected: false,
      isWeighted: false,
    };

    let grid = postFix.grid;
    let graph = new buildGraph(graphInfob, grid);
    graph.setLebelMap(postFix.map);
    var steps = []; //graph.getUnWeightedBfsSteps(1, 5);

    //var steps = graph.getWeightedBFS(1, 5);

    var container = document.getElementById("graph");

    var options = {
      clickToUse: true,
      physics: { enabled: true },
      edges: {
        color: { inherit: false },
      },
      nodes: {
        color: "#2d8ad6",
      },
      layout: {
        hierarchical: {
          enabled: false,
        },
      },
    };

    let visDfs = new visualizeGraphAlog(steps, "#FF0AB1", "#548694", true);
    visDfs.init(container, graph.getGraph(), options);

    let isFirstStep = true;

    function startAnimation() {
      if (!isFirstStep) {
        visDfs.releaseStep();
      }

      if (!visDfs.isStepAvailable()) {
        clearInt();
        return;
      }

      visDfs.nextStep();
      isFirstStep = false;
    }

    const myInt = setInterval(startAnimation, 2000);

    function clearInt() {
      clearInterval(myInt);
    }
  });
});
