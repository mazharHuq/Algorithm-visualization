// Defines a BST object; keeps implementation of BST internally and interact with GraphWidget to display BST visualizations

var BST = function (ex) {
  clearScreen();
  var self = this;
  var graphWidget = new GraphWidget();
  var expression = ex;

  /*
   * internalBst: Internal representation of BST in this object
   * The keys are the text of the nodes, and the value is the attributes of the corresponding node encapsulated in a JS object, which are:
   * - "parent": text of the parent node. If the node is root node, the value is null.
   * - "leftChild": text of the left child. No child -> null
   * - "rightChild": text of the right child. No child -> null
   * - "cx": X-coordinate of center of the node
   * - "cy": Y-coordinate of center of the node
   * - "height": height of the node. Height of root is 0
   * - "vertexClassNumber": Vertex class number of the corresponding node
   *
   * In addition, there is a key called "root" in internalBst, containing the text of the root node.
   * If BST is empty, root is null.
   */

  var internalBst = {};

  var amountVertex = 0;
  internalBst["root"] = null;

  this.getGraphWidget = function () {
    return graphWidget;
  };

  function init(eq) {
    var i;
    clearScreen();
    let expression = eq;

    function rank(value) {
      if (value == "^") return 5;
      if (value == "*") return 4;
      if (value == "/") return 4;
      if (value == "+") return 3;
      if (value == "-") return 3;
      if (value == "==") return 2;
      if (value == "!") return 1;
      if (value == "&") return 0;
      if (value == "|") return 0;
      return -2;
    }

    function isOperator(value) {
      if (value == "^") return true;
      if (value == "*") return true;
      if (value == "/") return true;
      if (value == "+") return true;
      if (value == "-") return true;
      if (value == "==") return true;
      if (value == "!") return true;
      if (value == "&") return true;
      if (value == "|") return true;
      if (value == ">") return true;
      if (value == "<") return true;
      return false;
    }

    function isOperand(value) {
      if (value >= "a" && value <= "z") return true;
      if (value >= "A" && value <= "Z") return true;
      if (value >= "0" && value <= "9") return true;
      return false;
    }

    function getPostFix(expression) {
      let stack = [];
      let postfix = "";
      for (let i = 0; i < expression.length; i++) {
        if (expression[i] == " ") continue;
        if (isOperand(expression[i])) postfix += expression[i];
        else if (expression[i] == "(") stack.push(expression[i]);
        else if (expression[i] == ")") {
          while (stack.length > 0 && stack[stack.length - 1] != "(") {
            postfix += stack.pop();
          }
          stack.pop();
        } else {
          while (
            stack.length > 0 &&
            rank(stack[stack.length - 1]) >= rank(expression[i]) &&
            stack[stack.length - 1] != "("
          ) {
            postfix += stack.pop();
          }
          stack.push(expression[i]);
        }
      }
      while (stack.length > 0) {
        postfix += stack.pop();
      }
      return postfix;
    }

    function equationToTree(str) {
      let postfix = getPostFix(str);
      let stack = [];
      let grid = [];
      let nodeNumber = 0;

      for (let i = 0; i < postfix.length; i++) {
        grid[i] = [
          [0, 0],
          [0, 0],
          [0, 0],
        ];
      }

      for (let i = 0; i < postfix.length; i++) {
        if (postfix[i] == " ") continue;
        else if (isOperator(postfix[i])) {
          let right = stack.pop();
          let left = stack.pop();

          ++nodeNumber;
          if (grid[left[0]][2][1] == 0) {
            grid[left[0]][2][1] = left[1];
          }
          if (grid[right[0]][2][0] == 0) {
            grid[right[0]][2][1] = right[1];
          }
          grid[nodeNumber] = [
            [left[0], left[1]],
            [right[0], right[1]],
            [nodeNumber, postfix[i]],
          ];
          stack.push([nodeNumber, postfix[i]]);
        } else {
          ++nodeNumber;
          stack.push([nodeNumber, postfix[i]]);
        }
      }
      return [grid, nodeNumber];
    }

    var gettree = equationToTree(expression);

    var tree = gettree[0];
    var rootNode = gettree[1];

    internalBst["root"] = parseInt(rootNode);
    internalBst[rootNode] = {
      parent: null,
      leftChild: null,
      rightChild: null,
      value: tree[rootNode][2][1],
      extratext: "[" + 1 + "," + 1 + "]",
      vertexClassNumber: amountVertex,
    };
    amountVertex++;

    function buildx(node, parent) {
      if (tree[node] == null) return;
      let L = tree[node][0];
      let R = tree[node][1];
      if (L[0] != 0) {
        internalBst[L[0]] = {
          parent: node,
          leftChild: null,
          rightChild: null,
          value: L[1],
          extratext: "[" + 2 + "," + 2 + "]",
          vertexClassNumber: amountVertex,
        };
        amountVertex++;
        internalBst[node].leftChild = L[0];
        buildx(L[0], node);
      }
      if (R[0] != 0) {
        internalBst[R[0]] = {
          parent: node,
          leftChild: null,
          rightChild: null,
          value: R[1],
          extratext: "[" + 1 + "," + 1 + "]",
          vertexClassNumber: amountVertex,
        };
        amountVertex++;
        internalBst[node].rightChild = R[0];
        buildx(R[0], node);
      }
    }
    buildx(rootNode, rootNode);

    recalculatePosition();

    for (key in internalBst) {
      if (key == "root") continue;
      graphWidget.addVertex(
        internalBst[key]["cx"],
        internalBst[key]["cy"],
        internalBst[key]["value"],
        internalBst[key]["vertexClassNumber"],
        true
      );
    }

    for (key in internalBst) {
      if (key == "root") continue;
      if (key == internalBst["root"]) continue;
      var parentVertex = internalBst[key]["parent"];
      graphWidget.addEdge(
        internalBst[parentVertex]["vertexClassNumber"],
        internalBst[key]["vertexClassNumber"],
        internalBst[key]["vertexClassNumber"],
        EDGE_TYPE_UDE,
        1,
        true
      );
    }

    let positionY = window.innerHeight * 0.8;
    let positionX = window.innerWidth * 0.22;
    var xIncrement = positionX;
    var yIncrement = positionY * 0.65;
    function getNewNode(node) {
      let newNode = {
        parent: null,
        leftChild: null,
        rightChild: null,
        value: node.value,
        extratext: "[" + 1 + "," + 1 + "]",
        cx: xIncrement,
        cy: yIncrement,
        vertexClassNumber: amountVertex,
      };
      xIncrement += 50;
      amountVertex++;

      return newNode;
    }

    function addVertexToGraph(N) {
      graphWidget.addRectVertex(
        internalBst[N]["cx"],
        internalBst[N]["cy"],
        internalBst[N]["value"],
        internalBst[N]["vertexClassNumber"],
        true
      );
    }

    let totalNode = rootNode;

    function preOrder(N) {
      if (internalBst[N] == null) return;
      let nodeNo = parseInt(N) + totalNode + 1;
      internalBst[nodeNo] = getNewNode(internalBst[N]);
      console.log(internalBst[nodeNo]);
      addVertexToGraph(nodeNo);
      preOrder(internalBst[N]["leftChild"]);
      preOrder(internalBst[N]["rightChild"]);
    }

    function inOrder(N) {
      if (internalBst[N] == null) return;
      inOrder(internalBst[N]["leftChild"]);
      let nodeNo = parseInt(N) + totalNode * 2 + 1;
      internalBst[nodeNo] = getNewNode(internalBst[N]);
      addVertexToGraph(nodeNo);

      inOrder(internalBst[N]["rightChild"]);
    }

    function postOrder(N) {
      if (internalBst[N] == null) return;
      postOrder(internalBst[N]["leftChild"]);
      postOrder(internalBst[N]["rightChild"]);

      let nodeNo = parseInt(N) + totalNode * 3 + 1;
      internalBst[nodeNo] = getNewNode(internalBst[N]);
      addVertexToGraph(nodeNo);
    }

    preOrder(rootNode);
    xIncrement = positionX;
    yIncrement = positionY * 0.7;
    inOrder(rootNode);
    xIncrement = positionX;
    yIncrement = positionY * 0.75;
    postOrder(rootNode);
  }

  function clearScreen() {
    var key;

    for (key in internalBst) {
      if (key == "root") continue;
      graphWidget.removeEdge(internalBst[key]["vertexClassNumber"]);
    }

    for (key in internalBst) {
      if (key == "root") continue;
      graphWidget.removeVertex(internalBst[key]["vertexClassNumber"]);
    }

    internalBst = {};
    internalBst["root"] = null;
    amountVertex = 0;
  }

  ///Position of node
  function recalculatePosition() {
    calcHeight(internalBst["root"], 0);
    updatePosition(internalBst["root"]);

    function calcHeight(currentVertex, currentHeight) {
      if (currentVertex == null) return;
      internalBst[currentVertex]["height"] = currentHeight;
      calcHeight(internalBst[currentVertex]["leftChild"], currentHeight + 1);
      calcHeight(internalBst[currentVertex]["rightChild"], currentHeight + 1);
    }

    function updatePosition(currentVertex) {
      if (currentVertex == null) return;

      if (currentVertex == internalBst["root"])
        internalBst[currentVertex]["cx"] = MAIN_SVG_WIDTH / 2;
      else {
        var i;
        var xAxisOffset = MAIN_SVG_WIDTH / 2;
        var parentVertex = internalBst[currentVertex]["parent"];
        for (i = 0; i < internalBst[currentVertex]["height"]; i++) {
          xAxisOffset /= 2;
        }

        if (internalBst[parentVertex]["leftChild"] == currentVertex)
          internalBst[currentVertex]["cx"] =
            internalBst[parentVertex]["cx"] - xAxisOffset;
        else
          internalBst[currentVertex]["cx"] =
            internalBst[parentVertex]["cx"] + xAxisOffset;
      }

      internalBst[currentVertex]["cy"] =
        50 + 50 * internalBst[currentVertex]["height"];

      updatePosition(internalBst[currentVertex]["leftChild"]);
      updatePosition(internalBst[currentVertex]["rightChild"]);
    }
  }

  init(expression);
};
