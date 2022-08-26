class visualizeGraphAlog {
    // This part is for mazharul
    /**
     * visualizeGraphAlog render the graph with help of vis library
     * also animate the algorithms like change node and edge color.
     */

    /**
     * @param {array of obj} _steps is an array of step for the dfs/bfs.. algorithms
     */

    constructor(_steps, _defaultNodeColor, _defaultEdgeColor, _isFindingPath) {
        this.steps = _steps;
        this.stepCount = 0;
        this.graph = null;
        this.isFindingPath = _isFindingPath;
        this.selectedParentNodeColor = "#0caa31";
        this.selectedChildNoteColor = "#2ebbd1";
        this.visitedNodeColor = "#2B7CE9";
        this.queueNodeColor = "#ccca61";
        this.selectedEdgeColor = "#0caa31";//"#ed5a7d";
        this.defaultNodeColor = _defaultNodeColor;
        this.defaultEdgeColor = _defaultEdgeColor;
        this.pathColor = "#ffa500";
    }

    setSteps(_steps) {
        this.steps = _steps;
        this.stepCount = 0;
    }

    /**
     *
     * @param {DOM obj} container the div element that render the graph
     * @param {obj} data contain the information about edges and nodes
     * @param {obj} options optional, empty in here
     */
    init(container, data, options) {
        this.graph = new vis.Network(container, data, options);
    }

    nextStep() {
        let parentNote = this.steps[this.stepCount].fromNodeID;
        let childNode = this.steps[this.stepCount].toNodeID;
        let edge = parentNote + "" + childNode;

        this.graph.clustering.updateClusteredNode(parentNote, {
            color: this.selectedParentNodeColor,
        });
        this.graph.clustering.updateClusteredNode(childNode, {
            color: this.selectedChildNoteColor,
        });
        this.graph.clustering.updateEdge(edge, {color: this.selectedEdgeColor});
    }

    releaseStep() {
        let parentNote = this.steps[this.stepCount].fromNodeID;
        let childNode = this.steps[this.stepCount].toNodeID;
        let edge = parentNote + "" + childNode;

        this.graph.clustering.updateClusteredNode(parentNote, {
            color: this.visitedNodeColor,
        });
        this.graph.clustering.updateClusteredNode(childNode, {
            color: this.visitedNodeColor,
        });

        if (this.steps[this.stepCount].isPath && this.isFindingPath) {
            this.graph.clustering.updateEdge(edge, {color: this.pathColor});
            //this.graph.clustering.updateClusteredNode(childNode, { color: this.pathColor });
            //this.graph.clustering.updateClusteredNode(parentNote, { color: this.pathColor });
        } else {
            this.graph.clustering.updateEdge(edge, {color: this.defaultEdgeColor});
        }

        this.stepCount++;
    }

    pathNodeColor(nodes) {
        for (let i = 0; i < nodes.length; i++) {
           this.colorNode(nodes[i], this.pathColor);
        }
    }

    colorNode(nodeID, color) {
        this.graph.clustering.updateClusteredNode(nodeID, {color: color});
    }

    isStepAvailable() {
        return this.steps.length > this.stepCount;
    }
}
