var ST = function () {
  var self = this;
  var graphWidget = new GraphWidget();

  var maxValueAllowed = 100; // Range of valid values of BST vertexes allowed
  var maxVertexAllowed = 16;
  this.maxVertexAllowed = maxVertexAllowed;
  this.maxValueAllowed = maxValueAllowed;

  var initialArray = [15, 6, 23, 4, 8, 19, 7, 9, 3, 71];
  var funcname = ["min", "max", "sum"];
  var func = [
    function (x, y) {
      if (x == null) return y;
      else if (y == null) return x;
      else
        return internalSt[vertexMax + x]["value"] <
          internalSt[vertexMax + y]["value"]
          ? x
          : y;
    },
    function (x, y) {
      if (x == null) return y;
      else if (y == null) return x;
      else
        return internalSt[vertexMax + x]["value"] >
          internalSt[vertexMax + y]["value"]
          ? x
          : y;
    },
    function (x, y) {
      if (x == null) return y;
      else if (y == null) return x;
      else return x + y;
    },
  ];

  function min(x, y) {
    return x < y ? x : y;
  }
  function max(x, y) {
    return x > y ? x : y;
  }
  /*
   * internalSt: Internal representation of BST in this object
   * The keys are the text of the nodes, and the value is the attributes of the corresponding node encapsulated in a JS object, which are:
   * - "parent": text of the parent node. If the node is root node, the value is null.
   * - "leftChild": text of the left child. No child -> null
   * - "rightChild": text of the right child. No child -> null
   * - "cx": X-coordinate of center of the node
   * - "cy": Y-coordinate of center of the node
   * - "height": height of the node. Height of root is 0
   * - "vertexClassNumber": Vertex class number of the corresponding node
   *
   * In addition, there is a key called "root" in internalSt, containing the text of the root node.
   * If BST is empty, root is null.
   */

  var internalSt = {};
  var amountVertex = 0;
  var vertexAmt = 0;
  var vertexMax = 0;
  var treetype = 0;
  var treefuncname = "";
  var treefunc = null;
  this.getGraphWidget = function () {
    return graphWidget;
  };
  this.init = function (nodes, type) {
    vertexAmt = nodes.length;
    vertexMax = Math.pow(
      2,
      Math.ceil(Math.log(nodes.length) / Math.log(2)) + 1
    );
    treetype = type;
    treefunc = func[type];
    treefuncname = funcname[type];
    create_empty_tree(nodes);
    function build(root, L, R, animate) {
      if (L == R) {
        switch (treetype) {
          case 0:
          case 1:
            internalSt[root]["value"] = L;
            break;
          case 2:
            internalSt[root]["value"] = nodes[L];
        }
      } else {
        build(root * 2, L, Math.floor((L + R) / 2), animate);
        build(root * 2 + 1, Math.floor((L + R) / 2) + 1, R, animate);
        internalSt[root]["value"] = treefunc(
          internalSt[root * 2]["value"],
          internalSt[root * 2 + 1]["value"]
        );
      }
    }
    //build(1, 0, vertexAmt - 1, false);
    display_tree(vertexAmt);

    var stateList = [];
    var currentState = null;
    currentState = createState(internalSt, {}, {});
    stateList.push(currentState);
    graphWidget.startAnimation(stateList);
    graphWidget.stop();
    return true;
  };

  this.create = function (nodes) {
    vertexAmt = nodes.length;
    create_empty_tree(nodes);
    display_tree(vertexAmt);

    var stateList = [];
    var vertexTraversed = {};
    var edgeTraversed = {};

    function build(root, L, R) {
      vertexTraversed[root] = true;
      if (L == R) {
        switch (treetype) {
          case 0:
          case 1:
            internalSt[root]["value"] = L;
            break;
          case 2:
            internalSt[root]["value"] = nodes[L];
        }
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["lineNo"] = 1;
        currentState["status"] = "Set this to " + internalSt[root]["value"];
        currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
        stateList.push(currentState);
      } else {
        vertexTraversed[root * 2] = true;
        edgeTraversed[root * 2] = true;
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["el"][root * 2]["animateHighlighted"] = true;
        currentState["el"][root * 2]["state"] = EDGE_TRAVERSED;
        currentState["lineNo"] = 3;
        currentState["status"] = "Build left tree";
        stateList.push(currentState);
        build(root * 2, L, Math.floor((L + R) / 2));
        delete vertexTraversed[root * 2];
        delete edgeTraversed[root * 2];
        vertexTraversed[root * 2 + 1] = true;
        edgeTraversed[root * 2 + 1] = true;
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["el"][root * 2 + 1]["animateHighlighted"] = true;
        currentState["el"][root * 2 + 1]["state"] = EDGE_TRAVERSED;
        currentState["lineNo"] = 4;
        currentState["status"] = "Build right tree";
        stateList.push(currentState);
        build(root * 2 + 1, Math.floor((L + R) / 2) + 1, R);
        delete vertexTraversed[root * 2 + 1];
        delete edgeTraversed[root * 2 + 1];
        internalSt[root]["value"] = treefunc(
          internalSt[root * 2]["value"],
          internalSt[root * 2 + 1]["value"]
        );
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["lineNo"] = 5;
        switch (treetype) {
          case 0:
            currentState["status"] =
              "if value[" +
              internalSt[root * 2]["value"] +
              "]&lt;value[" +
              internalSt[root * 2 + 1]["value"] +
              "] this =" +
              internalSt[root * 2]["value"] +
              " else this = " +
              internalSt[root * 2 + 1]["value"];
            break;
          case 1:
            currentState["status"] =
              "if value[" +
              internalSt[root * 2]["value"] +
              "]&gt;value[" +
              internalSt[root * 2 + 1]["value"] +
              "] this =" +
              internalSt[root * 2]["value"] +
              " else this = " +
              internalSt[root * 2 + 1]["value"];
            break;
          case 2:
            currentState["status"] =
              "Set this to " +
              treefuncname +
              "(" +
              internalSt[root * 2]["value"] +
              ", " +
              internalSt[root * 2 + 1]["value"] +
              ") = " +
              internalSt[root]["value"];
        }
        currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
        if (treetype != 2) {
          currentState["vl"][vertexMax + internalSt[root * 2]["value"]][
            "state"
          ] = VERTEX_HIGHLIGHTED;
          currentState["vl"][vertexMax + internalSt[root * 2 + 1]["value"]][
            "state"
          ] = VERTEX_HIGHLIGHTED;
        }
        stateList.push(currentState);
      }
      delete vertexTraversed[root];
    }

    var currentState = createState(internalSt);
    currentState["status"] = "Init with empty value tree";
    currentState["lineNo"] = 0;
    stateList.push(currentState);

    build(1, 0, vertexAmt - 1, true);

    currentState = createState(internalSt);
    currentState["status"] = "Finish";
    stateList.push(currentState);
    graphWidget.startAnimation(stateList);
    populatePseudocode(0);
    return true;
  };

  this.rmq = function (L, R) {
    var stateList = [];
    var vertexTraversed = {};
    var edgeTraversed = {};
    var currentState = createState(internalSt);
    if (treetype == 0) {
      currentState["status"] = "Look for the smallest element between L-R";
    } else if (treetype == 1) {
      currentState["status"] = "Look for the largest element between L-R";
    } else if (treetype == 2) {
      currentState["status"] = "Look for the sum between L-R";
    }
    currentState["lineNo"] = 0;
    stateList.push(currentState);
    function rmq(root, x, y, L, R) {
      vertexTraversed[root] = true;
      var ans = null;
      if (internalSt[root]["lazy"]) {
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["lineNo"] = 1;
        currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
        switch (treetype) {
          case 0:
          case 1:
            ans = internalSt[root]["value"];
            break;
          case 2:
            ans =
              (internalSt[root]["value"] / (y - x + 1)) *
              (min(y, R) - max(x, L) + 1);
            break;
        }
        currentState["status"] = "return " + ans;
        stateList.push(currentState);
      } else if (L <= x && y <= R) {
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["lineNo"] = 2;
        currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
        ans = internalSt[root]["value"];
        currentState["status"] = "return " + ans;
        stateList.push(currentState);
      } else {
        var middle = Math.floor((x + y) / 2);
        var left = null,
          right = null,
          ans = null;
        if (L <= middle) {
          vertexTraversed[root * 2] = true;
          edgeTraversed[root * 2] = true;
          currentState = createState(
            internalSt,
            vertexTraversed,
            edgeTraversed
          );
          currentState["el"][root * 2]["animateHighlighted"] = true;
          currentState["el"][root * 2]["state"] = EDGE_TRAVERSED;
          currentState["lineNo"] = 4;
          currentState["status"] =
            "Look for " + treefuncname + " on the left side";
          stateList.push(currentState);
          left = rmq(root * 2, x, Math.floor((x + y) / 2), L, R);
          delete vertexTraversed[root * 2];
          delete edgeTraversed[root * 2];
        }
        if (R >= middle + 1) {
          vertexTraversed[root * 2 + 1] = true;
          edgeTraversed[root * 2 + 1] = true;
          currentState = createState(
            internalSt,
            vertexTraversed,
            edgeTraversed
          );
          currentState["el"][root * 2 + 1]["animateHighlighted"] = true;
          currentState["el"][root * 2 + 1]["state"] = EDGE_TRAVERSED;
          currentState["lineNo"] = 5;
          currentState["status"] =
            "Look for " + treefuncname + " on the right side";
          stateList.push(currentState);
          right = rmq(root * 2 + 1, Math.floor((x + y) / 2) + 1, y, L, R);
          delete vertexTraversed[root * 2 + 1];
          delete edgeTraversed[root * 2 + 1];
        }
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["lineNo"] = 6;
        ans = treefunc(left, right);
        switch (treetype) {
          case 0:
            currentState["status"] =
              "if value[" +
              left +
              "]&lt;value[" +
              right +
              "] return" +
              left +
              " else return " +
              right;
            break;
          case 1:
            currentState["status"] =
              "if value[" +
              left +
              "]&rt;value[" +
              right +
              "] return" +
              left +
              " else return " +
              right;
            break;
          case 2:
            currentState["status"] =
              "return " +
              treefuncname +
              "(" +
              left +
              "," +
              right +
              ") = " +
              ans;
        }
        currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
        if (left != null && treetype != 2)
          currentState["vl"][vertexMax + left]["state"] = VERTEX_HIGHLIGHTED;
        if (right != null && treetype != 2)
          currentState["vl"][vertexMax + right]["state"] = VERTEX_HIGHLIGHTED;
        stateList.push(currentState);
      }
      delete vertexTraversed[root];
      return ans;
    }
    var ans = rmq(1, 0, vertexAmt - 1, L, R);
    currentState = createState(internalSt, vertexTraversed, edgeTraversed);
    currentState["lineNo"] = 0;
    currentState["status"] = "Finish, answer = " + ans;
    stateList.push(currentState);
    graphWidget.startAnimation(stateList);
    populatePseudocode(1);
    return true;
  };

  this.update = function (L, R, value) {
    var stateList = [];
    var vertexTraversed = {};
    var edgeTraversed = {};
    var currentState = createState(internalSt);

    currentState["status"] = "Update the value from " + L + " to " + R;
    currentState["lineNo"] = 0;
    stateList.push(currentState);
    function update(root, x, y, L, R, value) {
      vertexTraversed[root] = true;
      if (L <= x && y <= R) {
        if (x == y) {
          internalSt[vertexMax + x]["value"] = value;
          if (treetype == 2) {
            internalSt[root]["value"] = value;
          }
          currentState = createState(
            internalSt,
            vertexTraversed,
            edgeTraversed
          );
          currentState["lineNo"] = 1;
          currentState["status"] = "update this to " + value;
          currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
          stateList.push(currentState);
        } else {
          internalSt[root]["lazy"] = true;
          switch (treetype) {
            case 0:
            case 1:
              internalSt[root]["value"] = x;
              break;
            case 2:
              internalSt[root]["value"] = (y - x + 1) * value;
          }
          for (var i = x; i <= y; i++) {
            internalSt[vertexMax + i]["value"] = value;
            internalSt[vertexMax + i]["lazy"] = true;
          }
          currentState = createState(
            internalSt,
            vertexTraversed,
            edgeTraversed
          );
          currentState["lineNo"] = 1;
          currentState["status"] =
            "This vertex would be lazily updated to " +
            internalSt[root]["value"];
          currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
          stateList.push(currentState);
        }
      } else {
        if (internalSt[root]["lazy"] == true) {
          internalSt[root]["lazy"] = false;
          for (var i = x; i <= y; i++) {
            internalSt[vertexMax + i]["lazy"] = false;
          }
          currentState = createState(
            internalSt,
            vertexTraversed,
            edgeTraversed
          );
          currentState["lineNo"] = 3;
          currentState["status"] = "pass on lazy flag";
          currentState["vl"][root * 2]["state"] = VERTEX_HIGHLIGHTED;
          currentState["vl"][root * 2 + 1]["state"] = VERTEX_HIGHLIGHTED;
          stateList.push(currentState);
          switch (treetype) {
            case 0:
            case 1:
              update(
                root * 2,
                x,
                Math.floor((x + y) / 2),
                x,
                Math.floor((x + y) / 2),
                internalSt[vertexMax + x]["value"]
              );
              update(
                root * 2 + 1,
                Math.floor((x + y) / 2 + 1),
                y,
                Math.floor((x + y) / 2 + 1),
                y,
                internalSt[vertexMax + x]["value"]
              );
              break;
            case 2:
              update(
                root * 2,
                x,
                Math.floor((x + y) / 2),
                x,
                Math.floor((x + y) / 2),
                internalSt[root]["value"] / (y - x + 1)
              );
              update(
                root * 2 + 1,
                Math.floor((x + y) / 2 + 1),
                y,
                Math.floor((x + y) / 2 + 1),
                y,
                internalSt[root]["value"] / (y - x + 1)
              );
              break;
          }
        }
        if (L <= Math.floor((x + y) / 2)) {
          edgeTraversed[root * 2] = true;
          currentState = createState(
            internalSt,
            vertexTraversed,
            edgeTraversed
          );
          currentState["el"][root * 2]["animateHighlighted"] = true;
          currentState["el"][root * 2]["state"] = EDGE_TRAVERSED;
          currentState["lineNo"] = 4;
          currentState["status"] = "update at left_child, L, (L+R)/2";
          stateList.push(currentState);
          update(root * 2, x, Math.floor((x + y) / 2), L, R, value);
          delete edgeTraversed[root * 2];
        }
        if (Math.floor((x + y) / 2 + 1) <= R) {
          edgeTraversed[root * 2 + 1] = true;
          currentState = createState(
            internalSt,
            vertexTraversed,
            edgeTraversed
          );
          currentState["el"][root * 2 + 1]["animateHighlighted"] = true;
          currentState["el"][root * 2 + 1]["state"] = EDGE_TRAVERSED;
          currentState["lineNo"] = 5;
          currentState["status"] = "update at right_child, (L+R)/2+1, R";
          stateList.push(currentState);
          update(root * 2 + 1, Math.floor((x + y) / 2 + 1), y, L, R, value);
          delete edgeTraversed[root * 2 + 1];
        }
        internalSt[root]["value"] = treefunc(
          internalSt[root * 2]["value"],
          internalSt[root * 2 + 1]["value"]
        );
        currentState = createState(internalSt, vertexTraversed, edgeTraversed);
        currentState["lineNo"] = 6;
        switch (treetype) {
          case 0:
            currentState["status"] =
              "if value[" +
              internalSt[root * 2]["value"] +
              "]&lt;value[" +
              internalSt[root * 2 + 1]["value"] +
              "] this =" +
              internalSt[root * 2]["value"] +
              " else this = " +
              internalSt[root * 2 + 1]["value"];
            break;
          case 1:
            currentState["status"] =
              "if value[" +
              internalSt[root * 2]["value"] +
              "]&rt;value[" +
              internalSt[root * 2 + 1]["value"] +
              "] this =" +
              internalSt[root * 2]["value"] +
              " else this = " +
              internalSt[root * 2 + 1]["value"];
            break;
          case 2:
            currentState["status"] =
              "Set this to " +
              treefuncname +
              "(" +
              internalSt[root * 2]["value"] +
              ", " +
              internalSt[root * 2 + 1]["value"] +
              ") = " +
              internalSt[root]["value"];
        }
        currentState["vl"][root]["state"] = VERTEX_HIGHLIGHTED;
        if (treetype != 2) {
          currentState["vl"][vertexMax + internalSt[root * 2]["value"]][
            "state"
          ] = VERTEX_HIGHLIGHTED;
          currentState["vl"][vertexMax + internalSt[root * 2 + 1]["value"]][
            "state"
          ] = VERTEX_HIGHLIGHTED;
        }
        stateList.push(currentState);
      }
      delete vertexTraversed[root];
    }

    update(1, 0, vertexAmt - 1, L, R, value);
    currentState = createState(internalSt, vertexTraversed, edgeTraversed);
    currentState["status"] = "Finish";
    stateList.push(currentState);
    graphWidget.startAnimation(stateList);
    populatePseudocode(2);
    return true;
  };

  function create_empty_tree(nodes) {
    clearScreen();
    vertexMax = Math.pow(
      2,
      Math.ceil(Math.log(nodes.length) / Math.log(2)) + 1
    );

    function helper(parent, root, L, R) {
      if (L == R) {
        internalSt[root] = {
          parent: parent,
          leftChild: vertexMax + L,
          rightChild: null,
          value: "?",
          extratext: "[" + L + "," + R + "]",
          lazy: false,
          leaf: "",
          L: L,
          R: R,
        };
        internalSt[vertexMax + L] = {
          parent: null,
          leftChild: null,
          rightChild: null,
          value: nodes[L],
          extratext: L,
          lazy: false,
          leaf: "leaf-",
        };
      } else {
        internalSt[root] = {
          parent: parent,
          leftChild: root * 2,
          rightChild: root * 2 + 1,
          value: "?",
          extratext: "[" + L + "," + R + "]",
          lazy: false,
          leaf: "",
          L: L,
          R: R,
        };
        helper(root, root * 2, L, Math.floor((L + R) / 2));
        helper(root, root * 2 + 1, Math.floor((L + R) / 2) + 1, R);
      }
    }

    internalSt["root"] = 1;
    helper(null, 1, 0, vertexAmt - 1);

    recalculatePosition();
  }

  function display_tree() {
    function helper(root, L, R) {
      if (L == R) {
        graphWidget.addVertex(
          internalSt[root]["cx"],
          internalSt[root]["cy"],
          internalSt[root]["value"],
          root,
          true
        );
        graphWidget.addVertex(
          internalSt[vertexMax + L]["cx"],
          internalSt[vertexMax + L]["cy"],
          internalSt[vertexMax + L]["value"],
          vertexMax + L,
          true
        );
      } else {
        graphWidget.addVertex(
          internalSt[root]["cx"],
          internalSt[root]["cy"],
          internalSt[root]["value"],
          root,
          true
        );
        helper(root * 2, L, Math.floor((L + R) / 2));
        helper(root * 2 + 1, Math.floor((L + R) / 2) + 1, R);
      }
    }
    helper(1, 0, vertexAmt - 1);

    for (key in internalSt) {
      if (key == "root") continue;
      if (key == internalSt["root"]) continue;
      var parentVertex = internalSt[key]["parent"];
      if (parentVertex != null)
        graphWidget.addEdge(
          parentVertex,
          parseInt(key),
          parseInt(key),
          EDGE_TYPE_UDE,
          1,
          true
        );
    }
  }

  function clearScreen() {
    var key;

    for (key in internalSt) {
      if (key == "root") continue;
      if (key == internalSt["root"]) continue;
      graphWidget.removeEdge(key);
    }

    for (key in internalSt) {
      if (key == "root") continue;
      graphWidget.removeVertex(key);
    }

    internalSt = {};
    internalSt["root"] = null;
    amountVertex = 0;
  }

  /*
   * internalStObject: a JS object with the same structure of internalSt. This means the BST doen't have to be the BST stored in this class
   * vertexTraversed: JS object with the vertexes of the BST which are to be marked as traversed as the key
   * edgeTraversed: JS object with the edges of the BST which are to be marked as traversed as the key
   */

  function createState(internalStObject, vertexTraversed, edgeTraversed) {
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

    for (key in internalStObject) {
      if (key == "root") continue;
      key = parseInt(key);
      state["vl"][key] = {};

      state["vl"][key]["cx"] = internalStObject[key]["cx"];
      state["vl"][key]["cy"] = internalStObject[key]["cy"];
      state["vl"][key]["text"] = internalStObject[key]["value"];
      state["vl"][key]["extratext"] = internalStObject[key]["extratext"];
      if (internalStObject[key]["lazy"])
        state["vl"][key]["state"] = internalStObject[key]["leaf"] + "lazy";
      else
        state["vl"][key]["state"] =
          internalStObject[key]["leaf"] + VERTEX_DEFAULT;

      if (internalStObject[key]["parent"] == null) continue;

      state["el"][key] = {};

      state["el"][key]["vertexA"] = internalStObject[key]["parent"];
      state["el"][key]["vertexB"] = key;
      state["el"][key]["type"] = EDGE_TYPE_UDE;
      state["el"][key]["weight"] = 1;
      state["el"][key]["state"] = EDGE_DEFAULT;
      state["el"][key]["animateHighlighted"] = false;
    }

    for (key in vertexTraversed) {
      key = parseInt(key);
      if (typeof state["vl"][key] == "undefined")
        console.log(internalStObject[key]);
      state["vl"][key]["state"] = VERTEX_TRAVERSED;
    }

    for (key in edgeTraversed) {
      key = parseInt(key);
      state["el"][key]["state"] = EDGE_TRAVERSED;
    }

    return state;
  }

  function recalculatePosition() {
    calcHeight(internalSt["root"], 0);
    updatePosition(internalSt["root"]);

    function calcHeight(currentVertex, currentHeight) {
      if (currentVertex == null) return;
      internalSt[currentVertex]["height"] = currentHeight;
      calcHeight(internalSt[currentVertex]["leftChild"], currentHeight + 1);
      calcHeight(internalSt[currentVertex]["rightChild"], currentHeight + 1);
    }

    function updatePosition(currentVertex, isLeft) {
      if (currentVertex == null) return;

      if (currentVertex == internalSt["root"])
        internalSt[currentVertex]["cx"] = MAIN_SVG_WIDTH / 2;
      else {
        var i;
        var xAxisOffset = MAIN_SVG_WIDTH / 2;
        var parentVertex = internalSt[currentVertex]["parent"];
        for (i = 0; i < internalSt[currentVertex]["height"]; i++) {
          xAxisOffset /= 2;
        }

        if (isLeft) {
          internalSt[currentVertex]["cx"] =
            internalSt[parentVertex]["cx"] - xAxisOffset;
        } else
          internalSt[currentVertex]["cx"] =
            internalSt[parentVertex]["cx"] + xAxisOffset;
      }

      internalSt[currentVertex]["cy"] =
        50 + 50 * internalSt[currentVertex]["height"];

      if (
        internalSt[currentVertex]["leftChild"] != null &&
        internalSt[currentVertex]["rightChild"] == null
      ) {
        internalSt[internalSt[currentVertex]["leftChild"]]["cx"] =
          internalSt[currentVertex]["cx"];
        internalSt[internalSt[currentVertex]["leftChild"]]["cy"] = 350;
      } else {
        updatePosition(internalSt[currentVertex]["leftChild"], true);
        updatePosition(internalSt[currentVertex]["rightChild"], false);
      }
    }
  }

  function populatePseudocode(act) {
    switch (act) {
      case 0: // Build
        document.getElementById("code1").innerHTML = "if L == R then this = L";
        document.getElementById("code2").innerHTML = "else";
        document.getElementById("code3").innerHTML =
          "&nbspbuild left_child, L, (L+R)/2";
        document.getElementById("code4").innerHTML =
          "&nbspbuild right_child, (L+R)/2+1, R";
        switch (treetype) {
          case 0:
            document.getElementById("code5").innerHTML =
              "if value[left_child]&lt;value[right_child] <br>this = left_child else this = right_child";
            break;
          case 1:
            document.getElementById("code5").innerHTML =
              "if value[left_child]&rt;value[right_child] <br>this = left_child else this = right_child";
            break;
          case 2:
            document.getElementById("code5").innerHTML =
              "this = sum(value[left_child],value[right_child])";
        }

        document.getElementById("code6").innerHTML = "";
        document.getElementById("code7").innerHTML = "";
        break;
      case 1: // RMQ
        document.getElementById("code1").innerHTML =
          "if this have lazy flag then return this";
        document.getElementById("code2").innerHTML =
          "else if L<=x<=y<=R then return this";
        document.getElementById("code3").innerHTML = "else";
        document.getElementById("code4").innerHTML =
          "&nbspRMQ at left_child, L, (L+R)/2";
        document.getElementById("code5").innerHTML =
          "&nbspRMQ at right_child, (L+R)/2+1, R";
        switch (treetype) {
          case 0:
            document.getElementById("code6").innerHTML =
              "if value[left_child]&lt;value[right_child] <br>return left_child else return right_child";
            break;
          case 1:
            document.getElementById("code6").innerHTML =
              "if value[left_child]&rt;value[right_child] <br>return left_child else return right_child";
            break;
          case 2:
            document.getElementById("code6").innerHTML =
              "return sum(value[left_child],value[right_child])";
        }
        document.getElementById("code7").innerHTML = "";
        break;
      case 2: // update
        document.getElementById("code1").innerHTML =
          "if L<=x<=y<=R then update this";
        document.getElementById("code2").innerHTML = "else";
        document.getElementById("code3").innerHTML = "&nbsppass on lazy flag";
        document.getElementById("code4").innerHTML =
          "&nbspupdate at left_child, L, (L+R)/2";
        document.getElementById("code5").innerHTML =
          "&nbspupdate at right_child, (L+R)/2+1, R";
        switch (treetype) {
          case 0:
            document.getElementById("code6").innerHTML =
              "if value[left_child]&lt;value[right_child] <br>this = left_child else this = right_child";
            break;
          case 1:
            document.getElementById("code6").innerHTML =
              "if value[left_child]&rt;value[right_child] <br>this = left_child else this = right_child";
            break;
          case 2:
            document.getElementById("code6").innerHTML =
              "this = sum(value[left_child],value[right_child])";
        }
        document.getElementById("code7").innerHTML = "";
        break;
    }
  }
};
