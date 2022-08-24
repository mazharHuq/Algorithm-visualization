// Defines a BST object; keeps implementation of BST internally and interact with GraphWidget to display BST visualizations
// Also includes AVL tree

var BST = function (expression) {
  console.log("expression: " + expression);
  clearScreen();
  var self = this;
  var graphWidget = new GraphWidget();
  var expression = expression;

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

  this.generateRandom = function () {};

  this.inorderTraversal = function () {
    var stateList = [];
    var vertexTraversed = {};
    var vertexHighlighted = {};
    var edgeTraversed = {};
    var currentState = createState(internalBst);
    var currentVertexClass;
    var key;

    currentState["status"] = "The current BST";
    currentState["lineNo"] = 0;

    stateList.push(currentState);

    if (internalBst["root"] == null) {
      currentState = createState(internalBst);
      currentState["status"] = "Tree is empty.";
      currentState["lineNo"] = 1;
      stateList.push(currentState);

      currentState = createState(internalBst);
      currentState["status"] = "Return empty.";
      currentState["lineNo"] = 2;
      stateList.push(currentState);
      return true;
    } else {
      currentVertexClass =
        internalBst[internalBst["root"]]["vertexClassNumber"];

      currentState = createState(internalBst);
      currentState["vl"][currentVertexClass]["state"] = VERTEX_TRAVERSED;
      currentState["status"] =
        "The root " + internalBst["root"] + " is not null";
      currentState["lineNo"] = 1;

      stateList.push(currentState);

      currentState = createState(internalBst);
      currentState["vl"][currentVertexClass]["state"] = VERTEX_TRAVERSED;
      currentState["status"] =
        "So recurse and check left child of " + internalBst["root"];
      currentState["lineNo"] = 3;
      stateList.push(currentState);

      inorderTraversalRecursion(internalBst["root"]);
    }

    currentState = createState(internalBst);
    currentState["status"] = "In-order traversal of the whole BST is complete.";
    currentState["lineNo"] = 0;
    stateList.push(currentState);

    graphWidget.startAnimation(stateList);

    function showNode(node) {
      var vertexClass = internalBst[node]["vertexClassNumber"];
      var vertex = graphWidget.getVertex(vertexClass);
      vertex.hide();
    }

    function inorderTraversalRecursion(currentVertex) {
      var currentVertexLeftChild = internalBst[currentVertex]["leftChild"];
      var currentVertexRightChild = internalBst[currentVertex]["rightChild"];
      var currentVertexClass = internalBst[currentVertex]["vertexClassNumber"];
      console.log(currentVertex);
      if (currentVertexLeftChild == null) {
        vertexTraversed[currentVertex] = true;
        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        inorderHighlightVertex();
        currentState["status"] = "Left child of " + currentVertex + " is empty";
        currentState["lineNo"] = 1;
        stateList.push(currentState);

        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        inorderHighlightVertex();
        currentState["status"] = "Return empty";
        currentState["lineNo"] = 2;
        stateList.push(currentState);
      } else {
        var currentVertexLeftChildClass =
          internalBst[currentVertexLeftChild]["vertexClassNumber"];

        vertexTraversed[currentVertex] = true;
        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        inorderHighlightVertex();
        currentState["status"] =
          "Left child of " +
          currentVertex +
          " is " +
          currentVertexLeftChild +
          " (not null)";
        currentState["lineNo"] = 1;
        stateList.push(currentState);
        edgeTraversed[currentVertexLeftChildClass] = true;
        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        currentState["el"][currentVertexLeftChildClass][
          "animateHighlighted"
        ] = true;
        inorderHighlightVertex();
        currentState["status"] =
          "So recurse and check left child of " + currentVertexLeftChild;
        currentState["lineNo"] = 3;
        stateList.push(currentState);
        inorderTraversalRecursion(currentVertexLeftChild);
      }

      currentState = createState(internalBst, vertexTraversed, edgeTraversed);
      vertexHighlighted[currentVertexClass] = true;
      inorderHighlightVertex();
      currentState["status"] = "Visit node " + currentVertex + ".";
      currentState["lineNo"] = 4;
      stateList.push(currentState);

      if (currentVertexRightChild == null) {
        vertexTraversed[currentVertex] = true;
        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        inorderHighlightVertex();
        currentState["status"] =
          "Right child of " + currentVertex + " is empty";
        currentState["lineNo"] = 1;
        stateList.push(currentState);

        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        inorderHighlightVertex();
        currentState["status"] = "Return empty";
        currentState["lineNo"] = 2;
        stateList.push(currentState);
      } else {
        var currentVertexRightChildClass =
          internalBst[currentVertexRightChild]["vertexClassNumber"];

        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        inorderHighlightVertex();
        currentState["status"] =
          "Right child of " +
          currentVertex +
          " is " +
          currentVertexRightChild +
          " (not null)";
        currentState["lineNo"] = 1;
        stateList.push(currentState);
        edgeTraversed[currentVertexRightChildClass] = true;
        currentState = createState(internalBst, vertexTraversed, edgeTraversed);
        currentState["el"][currentVertexRightChildClass][
          "animateHighlighted"
        ] = true;
        inorderHighlightVertex();
        currentState["status"] =
          "So recurse and check left child of " + currentVertexRightChild;
        currentState["lineNo"] = 3;
        stateList.push(currentState);
        inorderTraversalRecursion(currentVertexRightChild);
      }

      currentState = createState(internalBst, vertexTraversed, edgeTraversed);
      if (currentVertex != internalBst["root"])
        currentState["el"][currentVertexClass]["state"] = EDGE_HIGHLIGHTED;
      inorderHighlightVertex();

      currentState["status"] =
        "In-order traversal of " + currentVertex + " is complete";
      currentState["lineNo"] = 0;
      stateList.push(currentState);
    }

    function inorderHighlightVertex() {
      var key;

      for (key in vertexHighlighted) {
        currentState["vl"][key]["state"] = VERTEX_HIGHLIGHTED;
      }
    }
    populatePseudocode(3);
    return true;
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
            rank(stack[stack.length - 1]) > rank(expression[i]) &&
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

    var xIncrement = 400;
    var yIncrement = 450;
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
    xIncrement = 400;
    yIncrement = 500;
    inOrder(rootNode);
    xIncrement = 400;
    yIncrement = 550;
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

  /*
   * internalBstObject: a JS object with the same structure of internalBst. This means the BST doen't have to be the BST stored in this class
   * vertexTraversed: JS object with the vertexes of the BST which are to be marked as traversed as the key
   * edgeTraversed: JS object with the edges of the BST which are to be marked as traversed as the key
   */

  function createState(internalBstObject, vertexTraversed, edgeTraversed) {
    if (
      vertexTraversed == null ||
      vertexTraversed == undefined ||
      !(vertexTraversed instanceof Object)
    )
      vertexTraversed = {};
    if (
      edgeTraversed == null ||
      edgeTraversed == undefined ||
      !(edgeTraversed instanceof Object)
    )
      edgeTraversed = {};

    var state = {
      vl: {},
      el: {},
    };

    var key;
    var vertexClass;

    for (key in internalBstObject) {
      if (key == "root") continue;

      vertexClass = internalBstObject[key]["vertexClassNumber"];

      state["vl"][vertexClass] = {};

      state["vl"][vertexClass]["cx"] = internalBstObject[key]["cx"];
      state["vl"][vertexClass]["cy"] = internalBstObject[key]["cy"];
      state["vl"][vertexClass]["text"] = internalBst[key]["value"];
      state["vl"][vertexClass]["state"] = VERTEX_DEFAULT;

      if (internalBstObject[key]["parent"] == null) continue;

      parentChildEdgeId = internalBstObject[key]["vertexClassNumber"];

      state["el"][parentChildEdgeId] = {};

      state["el"][parentChildEdgeId]["vertexA"] =
        internalBstObject[internalBstObject[key]["parent"]][
          "vertexClassNumber"
        ];
      state["el"][parentChildEdgeId]["vertexB"] =
        internalBstObject[key]["vertexClassNumber"];
      state["el"][parentChildEdgeId]["type"] = EDGE_TYPE_UDE;
      state["el"][parentChildEdgeId]["weight"] = 1;
      state["el"][parentChildEdgeId]["state"] = EDGE_DEFAULT;
      state["el"][parentChildEdgeId]["animateHighlighted"] = false;
    }

    for (key in vertexTraversed) {
      vertexClass = internalBstObject[key]["vertexClassNumber"];
      state["vl"][vertexClass]["state"] = VERTEX_TRAVERSED;
    }

    for (key in edgeTraversed) {
      state["el"][key]["state"] = EDGE_TRAVERSED;
    }

    return state;
  }

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
