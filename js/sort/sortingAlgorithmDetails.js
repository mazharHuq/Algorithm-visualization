class sortingAlgorithmDetails {
    constructor(sortFunction) {
        this.sortFunction = sortFunction;
        this.algorithmName = "";
        this.algorithmDescription = "";
        this.algorithmSummary = "";
        this.bestTime = "";
        this.averageTime = "";
        this.worstTime = "";
        this.spaceComplexity = "";
        this.pseudoCode = "";
        this.bubbleSort = {
            name: "Bubble Sort",
            algorithm: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
            complexity: "",
            description: `<div class="card">
            How Bubble Sort Works?<br>
                Consider an array arr[] = {5, 1, 4, 2, 8}<br>
                First Pass: <br>
        
                Bubble sort starts with very first two elements, comparing them to check which one is greater.<br>
                ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. <br>
                ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 <br>
                ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 <br>
                ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.<br>
                Second Pass: <br>
                
                Now, during second iteration it should look like this:<br>
                ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) <br>
                ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 <br>
                ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
                ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) <br>
                Third Pass: <br><br>
                
                Now, the array is already sorted, but our algorithm does not know if it is completed.<br>
                The algorithm needs one whole pass without any swap to know it is sorted.<br>
                ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
                ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
                ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br>
                ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )<br>
                    </div>`,
            averageTime: "O(n^2)",
            worstTime: "O(n^2)",
            bestTime: "O(n)",
            spaceComplexity: "O(1)",
            pseudoCode: `<pre>
    <code>
    begin BubbleSort(list)
       for all elements of list
          if list[i] > list[i+1]
             swap(list[i], list[i+1])
          end if
       end for
       return list
    end BubbleSort
    </code>
            </pre>`
        }, this.selectionSort = {
            name: "Selection Sort",
            algorithm: "Selection Sort is a sorting algorithm in which the smallest element is selected from the array and swapped with the first element. The same is repeated for the remaining elements. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
            complexity: "",
            description: `<div class="card">
        How Selection Sort Works?<br>
        Lets consider the following array as an example: arr[] = {64, 25, 12, 22, 11}<br>

        First pass:<br>
        <br>
        For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially. The first position where 64 is stored presently, after traversing whole array it is clear that 11 is the lowest value.<br>
        64   	   25   	   12   	   22   	   11   <br>
        Thus, replace 64 with 11. After one iteration 11, which happens to be the least value in the array, tends to appear in the first position of the sorted list.<br>
        11   	   25   	   12   	   22   	   64   <br>
        Second Pass:<br>
        <br>
        For the second position, where 25 is present, again traverse the rest of the array in a sequential manner.<br>
        11   	   25   	   12   	   22   	   64   <br>
        After traversing, we found that 12 is the second lowest value in the array and it should appear at the second place in the array, thus swap these values.<br>
        11   	   12   	   25   	   22   	   64   <br>
        Third Pass:<br>
        <br>
        Now, for third place, where 25 is present again traverse the rest of the array and find the third least value present in the array.<br>
        11   	   12   	   25   	   22   	   64   <br>
        While traversing, 22 came out to be the third least value and it should appear at the third place in the array, thus swap 22 with element present at third position.<br>
        11   	   12   	   22   	   25   	   64   <br>
        Fourth pass:<br>
        <br>
        Similarly, for fourth position traverse the rest of the array and find the fourth least element in the array <br>
        As 25 is the 4th lowest value hence, it will place at the fourth position.<br>
        11   	   12   	   22   	   25   	   64   <br>
        Fifth Pass:<br>

        At last the largest value present in the array automatically get placed at the last position in the array<br>
        The resulted array is the sorted array. <br>
           `,
            averageTime: "O(n^2)",
            worstTime: "O(n^2)",
            bestTime: "O(n^2)",
            spaceComplexity: "O(1)",
            pseudoCode: `
            <pre>
repeat (numOfElements - 1) times

    set the first unsorted element as the minimum

    for each of the unsorted elements

        if element < currentMinimum
         set element as new minimum
        swap minimum with first unsorted position
                     
            </pre>
            
            `
        }, this.insertionSort = {
            name: "Insertion Sort",
            algorithm: "Insertion Sort is a sorting algorithm in which the smallest element is selected from the array and swapped with the first element. The same is repeated for the remaining elements. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
            complexity: "",
            description: `<div class="card">
        How Insertion Sort Works?<br>
        Lets consider the following array as an example: arr[] = {64, 25, 12, 22, 11}<br>
        <br>
        First pass:<br>
        <br>
        For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially. The first position where 64 is stored presently, after traversing whole array it is clear that 11 is the lowest value.<br>
        64   	   25   	   12   	   22   	   11   <br>
        Thus, replace 64 with 11. After one iteration 11, which happens to be the least value in the array, tends to appear in the first position of the sorted list.<br>
        11   	   25   	   12   	   22   	   64   <br>
        Second Pass:<br>
        <br>
        For the second position, where 25 is present, again traverse the rest of the array in a sequential manner.<br>
        11   	   25   	   12   	   22   	   64   <br>
        After traversing, we found that 12 is the second lowest value in the array and it should appear at the second place in the array, thus swap these values.<br>
        11   	   12   	   25   	   22   	   64   <br>
        Third Pass:<br>
        <br>
        Now, for third place, where 25 is present again traverse the rest of the array and find the third least value present in the array.<br>
        11   	   12   	   25   	   22   	   64   <br>
        While traversing, 22 came out to be the third least value and it should appear at the third place in the array, thus swap 22 with element present at third position.<br>
        11   	   12   	   22   	   25   	   64   <br>
        Fourth pass:<br>
        <br>
        Similarly, for fourth position traverse the rest of the array and find the fourth least element in the array <br>
        As 25 is the 4th lowest value hence, it will place at the fourth position.<br>
        11   	   12   	   22   	   25   	   64   <br>
        Fifth Pass:<br>
        <br>
        At last the largest value present in the array
        automatically get placed at the last position in the array<br>
        The resulted array is the sorted array. <br>
        `,
            averageTime: "O(n^2)",
            worstTime: "O(n^2)",
            bestTime: "O(n)",
            spaceComplexity: "O(1)",
            pseudoCode: ` `,
        };
        this.Dijkstra = {
            name: "Dijkstra's Algorithm",
            algorithm: "Dijkstra's algorithm allows us to find the shortest path between any two vertices of a graph.",
            complexity: "",
            description: `
            <div class="card">
                    <li>Dijkstra's Algorithm basically starts at the node that you choose (the source node) and it analyzes the graph to find the shortest path between that node and all the other nodes in the graph.
                    <li>The algorithm keeps track of the currently known shortest distance from each node to the source node and it updates these values if it finds a shorter path.</li>
                    <li>Once the algorithm has found the shortest path between the source node and another node, that node is marked as "visited" and added to the path.</li>
                    <li>The process continues until all the nodes in the graph have been added to the path. This way, we have a path that connects the source node to all other nodes following the shortest path possible to reach each node.</li>
                </div>
                <a
                        href="https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            `,
            averageTime: "O(VLogV + E)\n" + " where, |V| is the number of vertices and |E| is the number of edges.",
            worstTime: "",
            bestTime: "",
            spaceComplexity: "O(|V| + |E|)\n" + "\n" + "where, |V| is the number of vertices and |E| is the number of edges.",
        };
        this.BreadthFirstSearch = {
            name: "Breadth First Search",
            algorithm: "Breadth First Search is a search algorithm that traverses nodes in a tree level by level.",
            complexity: "O(V+E)",
            description: `<div class="card">
           Breadth-First Traversal (or Search) for a graph is similar to Breadth-First Traversal of a tree (See method 2 of this post). 

            The only catch here is, that, unlike trees, graphs may contain cycles, so we may come to the same node again.
             To avoid processing a node more than once, we divide the vertices into two categories:
                <br>
                1. The ones that are already processed.
                <br>
                2. The ones that are not processed yet.
                <br>
                <br>
                The algorithm for searching a vertex u is as follows:
                <br>
                1. Mark u as processed.
                <br>
                2. Add u to the queue.
                <br>
                3. While the queue is not empty:
                <br>
                a. Remove the first vertex from the queue.
                <br>
                b. If the removed vertex is the sought vertex, return true.
                <br>
                c. Otherwise, for each neighbor v of u:
                <br>
                i. If v is not processed:
                <br>
                1. Mark v as processed.
                <br>
                2. Add v to the queue.
                <br>
                3. If the source vertex is not found in the queue, return false.
                <br>
                <br>
                </div>
                
                <a
                        href="https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                
            `,
            averageTime: "O(|V| + |E|)\n" + " where, |V| is the number of vertices and |E| is the number of edges.",
            worstTime: "",
            bestTime: "",
            spaceComplexity: "O(|V| + |E|)\n" + "\n" + "where, |V| is the number of vertices and |E| is the number of edges.",
        };
        this.DepthFirstSearch = {
            name: "Depth First Search",
            algorithm: "DFS (Depth-first search) is technique used for traversing tree or graph. Here backtracking is used for traversal. In this traversal first the deepest node is visited and then backtracks to it’s parent node if no sibling of that node exist. ",
            complexity: "",
            description: `<div class="card">
           Depth-first Traversal (or Search) for a graph is similar to Depth-First Traversal of a tree. 

            The only catch here is, that, unlike trees, graphs may contain cycles, so we may come to the same node again.
             To avoid processing a node more than once, we divide the vertices into two categories:
                <br>
                1. Mark the current node as visited and print the node. 
                <br>
                2. Traverse all the adjacent and unmarked nodes and call the recursive function with the index of the adjacent node.
                <br>
                <br>
                The algorithm for searching a vertex from u is as follows:
                <br>
                1. Mark u as processed.
                <br>
                2. Add u to the stack.
                <br>
                3. While the stack is not empty:
                <br>
                a. Remove the first vertex from the stack.
                <br>
                b. If the removed vertex is the sought vertex, return true.
                <br>
                c. Otherwise, for each neighbor v of u:
                <br>
                i. If v is not processed:
                <br>
                1. Mark v as processed.
                <br>
                2. Add v to the stack.
                <br>
                3. If the source vertex is not found in the stack, return false.
                <br>
                
            <a
                        href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/?ref=lbp">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            
            `,
            averageTime: "O(V)\n" + " where, |V| is the number of vertices",
            worstTime: "",
            bestTime: "",
            spaceComplexity: "O(|V| + |E|)\n" + "\n" + "where, |V| is the number of vertices and |E| is the number of edges.",
            pseudoCode: '',
        };
        this.gridDFS = {
            name: "Depth First Search",
            algorithm: " Find the source index of the cell in each matrix and then recursively find a path from source index to destination in the matrix. " + "The algorithm involves recursively finding all the paths until a final path is found to the destination.",
            complexity: "O(ROW * COL)",
            description: `
            <div class="card">
            The following algorithm can be followed to perform grid traversal using dfs:
            </br>
            <li>Traverse the matrix and find the starting index of the matrix.</li>
            <li>Create a recursive function that takes the index and visited matrix.</li>
            <li>Mark the current cell and check if the current cell is a destination or not. If the current cell is destination return true.</li>
            <li>Call the recursion function for all adjacent empty and unvisited cells.</li>
            <li>If any of the recursive functions returns true then unmark the cell and return true else unmark the cell and return false.</li>
            <a
                        href="https://www.geeksforgeeks.org/find-whether-path-two-cells-matrix/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>`,
            spaceComplexity: "O(ROW * COL)",
            averageTime: "O(ROW * COL)",
            worstTime: "O(ROW * COL)",
            bestTime: "O(ROW * COL)",
            pseudoCode: ''

        }
        this.gridBFS = {
            name: "Breadth First Search",
            algorithm: "The idea is to use Breadth-First Search. Consider each cell as a node and each boundary between any" + "two adjacent cells be an edge. so the total number of Node is ROW * COL. \n" + "So the idea is to do a breadth-first search from the starting cell till the ending cell is found. \n",
            complexity: "O(ROW * COL)",
            description: `
            <div class="card">
            <li>Create an empty Graph having N*N node(Vertex), 
            push all nodes into a graph, and note down the source and sink vertex.</li>
            <li>Now apply BFS on the graph, create a queue and insert the source node in the queue</li>
            <li>Run a loop till the size of the queue is greater than 0</li>
            <li>Remove the front node of the queue and check if the node is the destination if the destination returns true. mark the node</li>
            <li>Check all adjacent cells if unvisited and blank insert them in the queue.</li>
            <li>If the destination is not reached return true.</li>
            </div>

            <a href="https://www.geeksforgeeks.org/find-whether-path-two-cells-matrix/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`,
            spaceComplexity: "O(ROW * COL)",
            averageTime: "O(ROW * COL)",
            worstTime: "O(ROW * COL)",
            bestTime: "O(ROW * COL)",
            pseudoCode: '',

        }
        this.render();
    }

    render() {
        if (this.sortFunction == "bubbleSort") {
            this.algorithmName = this.bubbleSort.name;
            this.algorithmDescription = this.bubbleSort.description;
            this.algorithmSummary = this.bubbleSort.algorithm;
            this.bestTime = this.bubbleSort.bestTime;
            this.worstTime = this.bubbleSort.worstTime;
            this.averageTime = this.bubbleSort.averageTime;
            this.spaceComplexity = this.bubbleSort.spaceComplexity;
            this.pseudoCode = this.bubbleSort.pseudoCode;
        } else if (this.sortFunction == "selectionSort") {
            this.algorithmName = this.selectionSort.name;
            this.algorithmDescription = this.selectionSort.description;
            this.algorithmSummary = this.selectionSort.algorithm;
            this.bestTime = this.selectionSort.bestTime;
            this.averageTime = this.selectionSort.averageTime;
            this.worstTime = this.selectionSort.worstTime;
            this.spaceComplexity = this.selectionSort.spaceComplexity;
            this.pseudoCode = this.selectionSort.pseudoCode;
        } else if (this.sortFunction == "insertionSort") {
            this.algorithmName = this.insertionSort.name;
            this.algorithmDescription = this.insertionSort.description;
            this.algorithmSummary = this.insertionSort.algorithm;
            this.bestTime = this.insertionSort.bestTime;
            this.averageTime = this.insertionSort.averageTime;
            this.worstTime = this.insertionSort.worstTime;
            this.spaceComplexity = this.insertionSort.spaceComplexity;
        } else if (this.sortFunction == "BFS") {
            this.algorithmName = this.BreadthFirstSearch.name;
            this.algorithmDescription = this.BreadthFirstSearch.description;
            this.algorithmSummary = this.BreadthFirstSearch.algorithm;
            this.bestTime = this.BreadthFirstSearch.bestTime;
            this.averageTime = this.BreadthFirstSearch.averageTime;
            this.worstTime = this.BreadthFirstSearch.worstTime;
            this.spaceComplexity = this.BreadthFirstSearch.spaceComplexity;

        } else if (this.sortFunction == "DFS") {
            this.algorithmName = this.DepthFirstSearch.name;
            this.algorithmDescription = this.DepthFirstSearch.description;
            this.algorithmSummary = this.DepthFirstSearch.algorithm;
            this.bestTime = this.DepthFirstSearch.bestTime;
            this.averageTime = this.DepthFirstSearch.averageTime;
            this.worstTime = this.DepthFirstSearch.worstTime;
            this.spaceComplexity = this.DepthFirstSearch.spaceComplexity;
        } else if (this.sortFunction == "Dijkstra") {
            this.algorithmName = this.Dijkstra.name;
            this.algorithmDescription = this.Dijkstra.description;
            this.algorithmSummary = this.Dijkstra.algorithm;
            this.bestTime = this.Dijkstra.bestTime;
            this.averageTime = this.Dijkstra.averageTime;
            this.worstTime = this.Dijkstra.worstTime;
            this.spaceComplexity = this.Dijkstra.spaceComplexity;
        } else if (this.sortFunction == "gridBFS") {
            this.algorithmName = this.gridBFS.name;
            this.algorithmDescription = this.gridBFS.description;
            this.algorithmSummary = this.gridBFS.algorithm;
            this.bestTime = this.gridBFS.bestTime;
            this.averageTime = this.gridBFS.averageTime;
            this.worstTime = this.gridBFS.worstTime;
            this.spaceComplexity = this.gridBFS.spaceComplexity;
        } else if (this.sortFunction == "gridDFS") {
            this.algorithmName = this.gridDFS.name;
            this.algorithmDescription = this.gridDFS.description;
            this.algorithmSummary = this.gridDFS.algorithm;
            this.bestTime = this.gridDFS.bestTime;
            this.averageTime = this.gridDFS.averageTime;
            this.worstTime = this.gridDFS.worstTime;
            this.spaceComplexity = this.gridDFS.spaceComplexity;
        }
    }
}

export default sortingAlgorithmDetails;