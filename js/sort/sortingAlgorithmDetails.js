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
        console.log(this.sortFunction);
        this.bubbleSort = {
            name: "Bubble Sort",
            algorithm: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
            complexity: "",
            description:`<div class="card">
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
        },
        this.selectionSort = {
            name: "Selection Sort",
            algorithm: "Selection Sort is a sorting algorithm in which the smallest element is selected from the array and swapped with the first element. The same is repeated for the remaining elements. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
            complexity: "",
            description:`<div class="card">
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
            description:`<div class="card">
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
        },

        this.render();
    }

    render(){
        if(this.sortFunction == "bubbleSort"){
             this.algorithmName = this.bubbleSort.name;
             this.algorithmDescription = this.bubbleSort.description;
            this.algorithmSummary = this.bubbleSort.algorithm;
            this.bestTime = this.bubbleSort.bestTime;
            this.worstTime = this.bubbleSort.worstTime;
            this.averageTime = this.bubbleSort.averageTime;
            this.spaceComplexity = this.bubbleSort.spaceComplexity;

        }else if(this.sortFunction == "selectionSort"){
            this.algorithmName = this.selectionSort.name;
            this.algorithmDescription = this.selectionSort.description;
            this.algorithmSummary = this.selectionSort.algorithm;
            this.bestTime = this.selectionSort.bestTime;
            this.averageTime = this.selectionSort.averageTime;
            this.worstTime = this.selectionSort.worstTime;
            this.spaceComplexity = this.selectionSort.spaceComplexity;

        }else if(this.sortFunction == "insertionSort"){
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