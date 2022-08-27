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
    },
        this.insertionSort = {
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
        };
        this.Dijkstra = {
            name: "Dijkstra's Algorithm",
            algorithm:
                "Dijkstra's algorithm allows us to find the shortest path between any two vertices of a graph.",
            complexity:
                "O(E Log V)\n" +
                "\n" +
                "where, E is the number of edges and V is the number of vertices.",
            description: `
            <div class="card">
                    <li>Dijkstra's Algorithm basically starts at the node that you choose (the source node) and it analyzes the graph to find the shortest path between that node and all the other nodes in the graph.
                    <li>The algorithm keeps track of the currently known shortest distance from each node to the source node and it updates these values if it finds a shorter path.</li>
                    <li>Once the algorithm has found the shortest path between the source node and another node, that node is marked as "visited" and added to the path.</li>
                    <li>The process continues until all the nodes in the graph have been added to the path. This way, we have a path that connects the source node to all other nodes following the shortest path possible to reach each node.</li>
                </div>
                <a
                        href="https://www.geeksforgeeks.org/expression-tree/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            `,
            averageTime: "",
            worstTime: "",
            bestTime: "",
            spaceComplexity: "O(V+E)",
        };
        this.BreadthFirstSearch = {
            name: "Breadth First Search",
            algorithm: "Breadth First Search is a search algorithm that traverses nodes in a tree level by level.",
            complexity: "",
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
                3. If the sought vertex is not found in the queue, return false.
                <br>
                <br>
                The algorithm for searching a vertex u is as follows:
               
            `,
        };
        this.DepthFirstSearch = {
            name: "Depth First Search",
            algorithm:
                "Depth First Search is a search algorithm that traverses nodes in a tree level by level.",
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
                The algorithm for searching a vertex u is as follows:
                <br>
                1. Mark u as processed.
                <br>
                2. Add u to the astck.
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
                2. Add v to the queue.
                <br>
                3. If the sought vertex is not found in the queue, return false.
                <br>
                <br>
                The algorithm for searching a vertex u is as follows:
                
            <a
                        href="https://www.geeksforgeeks.org/expression-tree/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            
            `,
            pseudoCode: '',
        };
        this.gridDFS = {
            name: "Depth First Search",
            algorithm:
                "The algorithm starts at the Starting node and explores as far as possible along each branch before backtracking. Extra memory, usually a stack, is needed to keep track of the nodes discovered so far along a specified branch which helps in backtracking of the graph.",
            complexity: "O(ROW * COL)",
            description: `
            <div class="card">
            The following algorithm can be followed to perform grid traversal using dfs:
            </br>
            1. Initialize the grid with false values to indicate that no cell is visited. </br>
            2. Start the traversal using the cell in the grid. </br>
            3. Mark the cell as visited. </br>
            4. Use the direction vectors to generate the neighbors of the cell. </br>
            5. If the generated coordinates are within the matrix (the isvalid() function must return true) and the cell represented by the coordinate is unvisited, then make a recursive call to the traversal function using this coordinate.</br>
            6. Repeat the steps 2–5 until all the cells in the grid have been visited. </br>
            <a
                        href="https://www.geeksforgeeks.org/expression-tree/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>`,
            spaceComplexity: "O(ROW * COL)",
        }
        this.gridBFS = {
            name: "Breadth First Search",
            algorithm:
            "",
            complexity: "O(ROW * COL)",
            description: `
            <div class="card">
            Initialize queue.   </br>
Initialize 2d boolean array, the same size as the original array. This will help us in avoiding traversal to go in loops. </br>
Add the first element position (element at (source coordinate)) to queue </br>
Now until the queue is not empty or find destination  </br>
Take out the position from the queue and check if indexes are within the range of given matrix and marked false in the visited[] array, if not then ignore it and get the next position from the queue. </br>
Mark the element in the visited array.</div>
Add the element positions from left, right, down and up from the current element into the queue . </br>
<a
                        href="https://www.geeksforgeeks.org/expression-tree/">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            
            </div>`,
            spaceComplexity: "O(ROW * COL)",

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
        } else if (this.sortFunction == "insertionSort") {
            this.algorithmName = this.insertionSort.name;
            this.algorithmDescription = this.insertionSort.description;
            this.algorithmSummary = this.insertionSort.algorithm;
            this.bestTime = this.insertionSort.bestTime;
            this.averageTime = this.insertionSort.averageTime;
            this.worstTime = this.insertionSort.worstTime;
            this.spaceComplexity = this.insertionSort.spaceComplexity;
        } else if (this.sortFunction == "bfs") {
            this.algorithmName = this.BreadthFirstSearch.name;
            this.algorithmDescription = this.BreadthFirstSearch.description;
            this.algorithmSummary = this.BreadthFirstSearch.algorithm;
        }
        else if (this.sortFunction == "dfs") {
            this.algorithmName = this.DepthFirstSearch.name;
            this.algorithmDescription = this.DepthFirstSearch.description;
            this.algorithmSummary = this.DepthFirstSearch.algorithm;
        }
        else if (this.sortFunction == "dijkstra") {
            this.algorithmName = this.Dijkstra.name;
            this.algorithmDescription = this.Dijkstra.description;
            this.algorithmSummary = this.Dijkstra.algorithm;
            this.bestTime = this.Dijkstra.bestTime;
            this.averageTime = this.Dijkstra.averageTime;
            this.worstTime = this.Dijkstra.worstTime;
            this.spaceComplexity = this.Dijkstra.spaceComplexity;
        }
        else if (this.gridBFS == "gridBFS") {
            this.algorithmName = this.gridBFS.name;
            this.algorithmDescription = this.gridBFS.description;
            this.algorithmSummary = this.gridBFS.algorithm;
            this.bestTime = this.gridBFS.bestTime;
            this.averageTime = this.gridBFS.averageTime;
            this.worstTime = this.gridBFS.worstTime;
            this.spaceComplexity = this.gridBFS.spaceComplexity;
        }
        else if (this.gridDFS == "gridDFS") {
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
