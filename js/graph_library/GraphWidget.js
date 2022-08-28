// first starting author: Koh Zi Chun

var vertexSvg = mainSvg.append("g").attr("id", "vertex");

var edgeSvg = mainSvg.append("g").attr("id", "edge");

var vertexTextSvg = mainSvg.append("g").attr("id", "vertexText");

var edgeWeightSvg = mainSvg.append("g").attr("id", "edgeWeight");

var edgeWeightPathSvg = mainSvg.append("g").attr("id", "edgeWeightPath");

var GraphWidget = function () {
  var self = this;

  var vertexList = {};
  var edgeList = {};

  var vertexUpdateList = {};
  var edgeUpdateList = {};


  // Show: true means the element will immediately appear on the html page
  //       false means the element will remain hidden until told to appear
  // Duration: duration of the show animation, only used when show is true

  // Adds a CIRCLE vertex
  // TODO: Merge with addRectVertex
  this.addVertex = function (cx, cy, vertexText, vertexClassNumber, show) {
    if (show != false) show = true;

    var newVertex = new GraphVertexWidget(
      cx,
      cy,
      VERTEX_SHAPE_CIRCLE,
      vertexText,
      vertexClassNumber
    );

    vertexList[vertexClassNumber] = newVertex;
    vertexUpdateList[vertexClassNumber] = false;

    if (show == true) {
      vertexList[vertexClassNumber].showVertex();
      vertexList[vertexClassNumber].redraw();
    }
  };

  // Adds a RECTANGULAR vertex
  // TODO: Merge with addVertex
  this.addRectVertex = function (
    rx,
    ry,
    vertexText,
    vertexClassNumber,
    show,
    rect_type
  ) {
    if (show != false) show = true;

    console.log(VERTEX_SHAPE_RECT);
    if (typeof rect_type == "undefined") rect_type = VERTEX_SHAPE_RECT;
    var newVertex = new GraphVertexWidget(
      rx,
      ry,
      rect_type,
      vertexText,
      vertexClassNumber
    );

    vertexList[vertexClassNumber] = newVertex;
    vertexUpdateList[vertexClassNumber] = false;

    if (show == true) {
      vertexList[vertexClassNumber].showVertex();
      vertexList[vertexClassNumber].redraw();
    }
  };

  // Default for weight is 1 and for type is EDGE_TYPE_UDE
  this.addEdge = function (
    vertexClassA,
    vertexClassB,
    edgeIdNumber,
    type,
    weight,
    show,
    showWeight
  ) {
    try {
      if (show != false) show = true;
      if (showWeight != true) showWeight = false;
      if (type == null || isNaN(type)) type = EDGE_TYPE_UDE;
      if (weight == null || isNaN(weight)) weight = 1;

      var vertexA = vertexList[vertexClassA];
      var vertexB = vertexList[vertexClassB];

      var newEdge = new GraphEdgeWidget(
        vertexA,
        vertexB,
        edgeIdNumber,
        type,
        weight
      );

      edgeList[edgeIdNumber] = newEdge;
      edgeUpdateList[edgeIdNumber] = false;

      vertexList[vertexClassA].addEdge(newEdge);
      vertexList[vertexClassB].addEdge(newEdge);

      if (show == true) {
        edgeList[edgeIdNumber].showEdge();
        if (showWeight == true) edgeList[edgeIdNumber].showWeight();
        edgeList[edgeIdNumber].redraw();
      }
    } catch (err) {}
  };

  this.removeEdge = function (edgeIdNumber) {
    if (edgeList[edgeIdNumber] == null || edgeList[edgeIdNumber] == undefined)
      return;

    edgeList[edgeIdNumber].removeEdge();
    delete edgeList[edgeIdNumber];
    delete edgeUpdateList[edgeIdNumber];
  };

  // Edges are assumed to have been removed
  this.removeVertex = function (vertexClassNumber) {
    vertexList[vertexClassNumber].removeVertex();
    delete vertexList[vertexClassNumber];
    delete vertexUpdateList[vertexClassNumber];
  };

  // graphState object is equivalent to one element of the statelist.
  // See comments below this function

  /*
   * stateList: List of JS object containing the states of the objects in the graph
   * Structure of stateList: List of JS object with the following keys and values:
   *                            - vl: JS object with vertex ID as keys and corresponding state positions and constants as value (NEW: another extra text)
   *                            - el: JS object with edge ID as keys and corresponding state connections constants as value
   *
   * Objects not present in the i-th iteration stateList will be hidden until the animation stops, where it will be removed
   * New objects present in the i-th iteration stateList will be automatically created
   *
   * State 0 should be the initial state, last state should be the end state
   */

  /*
   * Contents of "vl":
   * - cx
   * - cy
   * - text
   * - state
   *
   * Optional contents of "vl":
   * - inner-r  : Customize the vertex's inner radius!
   * - outer-r  : Customize the vertex's outer radius!
   * - inner-w  : Customize the vertex's inner width!
   * - outer-w  : Customize the vertex's outer width!
   * - inner-h  : Customize the vertex's inner height!
   * - outer-h  : Customize the vertex's outer height!
   * - inner-stroke-width : Customize the vertex's inner stroke width!
   * - outer-stroke-width : Customize the vertex's outer stroke width!
   * - text-font-size : Customize the vertex text's font size!
   * - NEW: extratext : Add a red extra text below each vertex
   */

  /*
   * Contents of "el":
   * - vertexA: id of vertex A
   * - vertexB: id of vertex B
   * - type
   * - weight
   * - state  : Display state
   * - animateHighlighted : Determines whether highlighted animation should be played. True or false
   *
   * Optional contents of "el":
   * - displayWeight  : Determines whether weight should be shown. True or false
   */

  /*
   * Notes:
   * - Vertex's elements will only affect vertexes that has that element
   *   (example: radius will only affect circular vertex, width and height will only affect rectangular vertex)
   *   Think of each vertex as an SVG element and see which components are present
   * - The optional contents has to be defined for EACH state objects
   *   For example, if you define a custom radius in state 1 and didn't define it in state 2,
   *   the vertex will revert to default radius upon reaching state 2
   */
};
