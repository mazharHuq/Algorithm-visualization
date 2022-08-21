class graphAlgorithmDetails {
  constructor(graphFunction) {
    this.graphFunction = graphFunction;
    this.algorithmName = "";
    this.algorithmDescription = "";
    this.algorithmSummary = "";
    this.bestTime = "";
    this.averageTime = "";
    this.worstTime = "";
    this.spaceComplexity = "";
    console.log(this.graphFunction);
    (this.BFS = {
      name: "Breadth-first search",
      algorithm:
        "Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node.There are many ways to traverse the graph, but among them, BFS is the most commonly used approach. It is a recursive algorithm to search all the vertices of a tree or graph data structure. BFS puts every vertex of the graph into two categories - visited and non-visited. It selects a single node in a graph and, after that, visits all the nodes adjacent to the selected node.",
      complexity: "O(V+E)",
      description: `    
      Applications of BFS algorithm</br>
      The applications of breadth-first-algorithm are given as follows -</br>
      
      BFS can be used to find the neighboring locations from a given source location.
      In a peer-to-peer network, BFS algorithm can be used as a traversal method to find all the neighboring nodes. Most torrent clients, such as BitTorrent, uTorrent, etc. employ this process to find "seeds" and "peers" in the network.
      BFS can be used in web crawlers to create web page indexes. It is one of the main algorithms that can be used to index web pages. It starts traversing from the source page and follows the links associated with the page. Here, every web page is considered as a node in the graph.
      BFS is used to determine the shortest path and minimum spanning tree.
      BFS is also used in Cheney's technique to duplicate the garbage collection.
      It can be used in ford-Fulkerson method to compute the maximum flow in a flow network.
      </br>
      Algorithm</br>
      The steps involved in the BFS algorithm to explore a graph are given as follows -</br>
      
      Step 1: SET STATUS = 1 (ready state) for each node in G</br>
      
      Step 2: Enqueue the starting node A and set its STATUS = 2 (waiting state)</br>
      
      Step 3: Repeat Steps 4 and 5 until QUEUE is empty</br>
      
      Step 4: Dequeue a node N. Process it and set its STATUS = 3 (processed state).</br>
      
      Step 5: Enqueue all the neighbours of N that are in the ready state (whose STATUS = 1) and set
      
      their STATUS = 2</br>
      
      (waiting state) </br>
      
      [END OF LOOP] </br>
      
      Step 6: EXIT`,
      averageTime: "O(V+E)",
      worstTime: "O(V+E)",
      bestTime: "O(V+E)",
      spaceComplexity: "O(V+E)",
    }),
      (this.selectionSort = {
        name: "Selection Sort",
        algorithm:
          "Selection Sort is a sorting algorithm in which the smallest element is selected from the array and swapped with the first element. The same is repeated for the remaining elements. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
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
      }),
      (this.insertionSort = {
        name: "Insertion Sort",
        algorithm:
          "Insertion Sort is a sorting algorithm in which the smallest element is selected from the array and swapped with the first element. The same is repeated for the remaining elements. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
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
      }),
      (this.BreadthFirstSearch = {
        name: "Breadth First Search",
        algorithm:
          "Breadth First Search is a search algorithm that traverses nodes in a tree level by level.",
        complexity: "",
        description: `<div class="card">`,
      }),
      this.render();
  }

  render() {
    if (this.graphFunction == "bubbleSort") {
      this.algorithmName = this.bubbleSort.name;
      this.algorithmDescription = this.bubbleSort.description;
      this.algorithmSummary = this.bubbleSort.algorithm;
      this.bestTime = this.bubbleSort.bestTime;
      this.worstTime = this.bubbleSort.worstTime;
      this.averageTime = this.bubbleSort.averageTime;
      this.spaceComplexity = this.bubbleSort.spaceComplexity;
    } else if (this.graphFunction == "selectionSort") {
      this.algorithmName = this.selectionSort.name;
      this.algorithmDescription = this.selectionSort.description;
      this.algorithmSummary = this.selectionSort.algorithm;
      this.bestTime = this.selectionSort.bestTime;
      this.averageTime = this.selectionSort.averageTime;
      this.worstTime = this.selectionSort.worstTime;
      this.spaceComplexity = this.selectionSort.spaceComplexity;
    } else if (this.graphFunction == "insertionSort") {
      this.algorithmName = this.insertionSort.name;
      this.algorithmDescription = this.insertionSort.description;
      this.algorithmSummary = this.insertionSort.algorithm;
      this.bestTime = this.insertionSort.bestTime;
      this.averageTime = this.insertionSort.averageTime;
      this.worstTime = this.insertionSort.worstTime;
      this.spaceComplexity = this.insertionSort.spaceComplexity;
    }
  }
}
export default sortingAlgorithmDetails;
