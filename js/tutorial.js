class Tutorial {
  constructor(tutorial) {
    this.init();
    this.selectedStep = 1;
    this.tutorialType = "sort";
    this.sortTutorialStep = {
      1: {
        title: "Welcome to the tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> This short tutorial will walk you through all the features of this application.</h2>
                <h3 class="font-bold" >
                    If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!
                </h3>
                
                `,
        image: "../Images/bar.png",
        next: 2,
        prev: 1,
        isFinish: false,
      },
      2: {
        title: "Selecting a sorting algorithm",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> Select a Sorting Algorithm from the dropdown.</h2>
                
                
                `,
        image: "../Images/tutorial-sort/select_sort_algo.png",
        next: 3,
        prev: 1,
        isFinish: false,
      },
      3: {
        title: "Generate a random array or enter your own",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> This short tutorial will walk you through all the features of this application.</h2>
                <h3 class="font-bold" >
                    If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!
                </h3>
                
                `,
        image: "../Images/tutorial-sort/array_input.png",
        next: 4,
        prev: 2,
        isFinish: false,
      },
      4: {
        title: "Sort the array",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">
                Click the "visualize" button to see the array being sorted. 
                </h2>
                <h3 class="font-bold" >
                 
                </h3>
                <div class="flex justify-center">
                    <img src="" alt="" class="w-full">
                </div>
                
                `,
        image: "../Images/tutorial-sort/visualize.png",
        next: 5,
        prev: 3,
        isFinish: false,
      },
      5: {
        title: "You can see the algorithm details",
        body: `
                    <h2 class="text-2xl font-semibold ">
                    Click the "visualize" button to see the array being sorted.
                    </h2>
                    <h3 class="font-bold" >
                    You can see the algorithm details by clicking the "Algorithm Details" button.
                    </h3>
                    <div class="flex justify-center">
                        <img src="" alt="" class="w-full">
                    </div>
                    
                    `,
        image: "../Images/tutorial-sort/algorithm_details.png",
        next: 6,
        prev: 4,
        isFinish: false,
      },
      6: {
        title: "You are done! Array is  sorted!",
        body: `
                    <h2 class="text-2xl font-semibold ">
                    Click the "visualize" button to see the array being sorted.
                    </h2>
                    <h3 class="font-bold" >
                    You can see the algorithm details by clicking the "Algorithm Details" button.
                    </h3>
                    <div class="flex justify-center">
                        <img src="" alt="" class="w-full">
                    </div>
                    
                    `,
        image: "../Images/tutorial-sort/algorithm_details.png",
        next: -1,
        prev: 4,
        isFinish: true,
      },
    };
    this.pathFindingTutorialStep = {
      1: {
        title: "Welcome to the path finding tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> This short tutorial will walk you through all the features of this application.</h2>
                <h3 class="font-bold" >
                    If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!
                </h3>
                
                `,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/a_-search-algorithm-1.png",
        next: 2,
        prev: 1,
        isFinish: false,
      },
      2: {
        title: "Welcome to the path finding tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> select a algorithm from dropdown menu.</h2>
                <h3 class="font-bold" >
                    which you want to visualize!
                </h3>
                
                `,
        image: "/Images/graph/gg1.png",
        next: 3,
        prev: 1,
        isFinish: false,
      },
      3: {
        title: "Welcome to the path finding tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Set the animation speed from here.</h2>
                <h3 class="font-bold" >
                    and enjoy it!
                </h3>
                
                `,
        image: "/Images/graph/ggs.png",
        next: 4,
        prev: 2,
        isFinish: false,
      },
      4: {
        title: "Welcome to the path finding tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Set the obstacle and made it more difficult to reach the destination</h2>
                <h3 class="font-bold" >
                    so click this obstacle button!
                </h3>
                
                `,
        image: "/Images/graph/gg3.png",
        next: 5,
        prev: 3,
        isFinish: false,
      },
      5: {
        title: "Welcome to the path finding tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Oh! Don't forget to click the visualize button</h2>
          `,
        image: "/Images/graph/gg4.png",
        next: 6,
        prev: 4,
        isFinish: false,
      },
      6: {
        title: "Welcome to the path finding tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Another important tips is after click obstacle button you can create obstacle on grid using mouse.Just hold the mouse on grid area obstacle gonna create by themeselve by following your mouse pointer</h2>
          `,
        image: "/Images/graph/gg5.png",
        next: 7,
        prev: 6,
        isFinish: false,
      },
      7: {
        title: "Welcome to the path finding tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Congratulations! you'r good to go. Go and play, don't forget to look the down left and right box to learn more about the algorithm</h2>
          `,
        image:
          "https://teresas.ac.in/wp-content/uploads/2020/11/360_F_215944418_bd7YIht4fl2OJDNmokCkRDo72pIdYV60.jpg",
        next: -1,
        prev: 5,
        isFinish: true,
      },
    };
    this.graphTutorialStep = {
      1: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> This short tutorial will walk you through all the features of this application.</h2>
                <h3 class="font-bold" >
                    If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!
                </h3>
                
                `,
        image: "/Images/graphNode/gnc.png",
        next: 2,
        prev: 1,
        isFinish: false,
      },
      2: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Select an algorithm from the dropdown menu</h2>  
                `,
        image: "/Images/graphNode/gn1.png",
        next: 3,
        prev: 1,
        isFinish: false,
      },
      3: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">
                 Select source node from the menu. One graph will be generated by defaul.According the generated graph the nodes are stored in the menu.</h2>  
                `,
        image: "/Images/graphNode/gn21.png",
        next: 4,
        prev: 2,
        isFinish: false,
      },
      4: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> Same as source node to see the shortest path from one point to another select the destination node from this menu.
                 </h2>  
                `,
        image: "/Images/graphNode/gn3.png",
        next: 5,
        prev: 3,
        isFinish: false,
      },
      5: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Select an algorithm from the dropdown menu
                 Give your own input for node first two numbers for node and third number for edge weight.</h2>  
                `,
        image: "/Images/graphNode/gn7.png",
        next: 6,
        prev: 4,
        isFinish: false,
      },
      6: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">You can add another feature. If you want to see directed graph and want to set weight for the edges please tick this box </h2>  
                `,
        image: "/Images/graphNode/gn6.png",
        next: 7,
        prev: 5,
        isFinish: false,
      },
      7: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">Don't forget to click these buttons. The visualize button will visualize the graph accrding to your given input and then you can download the new generated graph node bu clicking the download button.</h2>  
                `,
        image: "/Images/graphNode/gn4.png",
        next: 8,
        prev: 6,
        isFinish: false,
      },
      8: {
        title: "Welcome to the graph tutorial",
        text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold ">The color code panel shows the assign color for default node, selected, Queue, visited, default edge, path</h2>  
                `,
        image: "/Images/graphNode/gn5.png",
        next: -1,
        prev: 7,
        isFinish: true,
      },
    };
    this.expressionTutorialStep = {
      1: {
        title: "Welcome to Expression tree tutorial",
        text: "This is a tutorial to help you get started with the Expression Tree. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> This short tutorial will walk you through all the features of this application.</h2>
                <h3 class="font-bold" >
                    If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!
                </h3>
                
                `,
        image:
          "https://www.sanfoundry.com/wp-content/uploads/2018/07/expression-tree-questions-answers-q11.png",
        next: 2,
        prev: 1,
        isFinish: false,
      },
      2: {
        title: "Visualizing Expression Tree",
        body: `
                 <h2 class="text-2xl font-semibold ">You can give your own expression to see the tree</h2> <br>
                 while giving input remember one opearator and one opearan and you can give bracket also as input
                `,
        image: "/Images/expressionTree/expImage.png",
        next: 3,
        prev: 1,
        isFinish: false,
      },
      3: {
        title: "Visualizing Expression Tree",
        body: `
                 <h2 class="text-2xl font-semibold ">You can give your own expression to see the tree</h2> <br>
                 after input the correct expression please click the generate tree button
                `,
        image: "/Images/expressionTree/buildTreeButton.png",
        next: 4,
        prev: 2,
        isFinish: false,
      },
      4: {
        title: "Visualizing Expression Tree",
        body: `
                 <h2 class="text-2xl font-semibold ">You can give your own expression to see the tree</h2> <br>
                 you can also download the respective generate tree by clicking the download button
                `,
        image: "/Images/expressionTree/downloadb.png",
        next: 5,
        prev: 3,
        isFinish: false,
      },
      5: {
        title: "Visualizing Expression Tree",
        body: `
                 <h2 class="text-2xl font-semibold ">From the given infix expression</h2> <br>
                 we are generating postfix, prefix expression also you can see it here
                `,
        image: "/Images/expressionTree/equation.png",
        next: -1,
        prev: 4,
        isFinish: true,
      },
    };
    this.stackArrayTutorialStep = {
      1: {
        title: "Welcome to Stack Array tutorial",
        text: "This is a tutorial to help you get started with the Expression Tree. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h2 class="text-2xl font-semibold "> This short tutorial will walk you through all the features of this application.</h2>
                <h3 class="font-bold" >
                    If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!
                </h3>
                
                `,
        image: "/Images/stack/stackc.png",
        next: 2,
        prev: 1,
        isFinish: false,
      },
      2: {
        title: "Welcome to Stack Array tutorial",
        text: "This is a tutorial to help you get started with the Expression Tree. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                
                <h3 class="font-bold" >
                    Enter the value to perform the stack operation!
                </h3>
                
                `,
        image: "/Images/stack/stack1.png",
        next: 3,
        prev: 1,
        isFinish: false,
      },
      3: {
        title: "Welcome to Stack Array tutorial",
        text: "This is a tutorial to help you get started with the Expression Tree. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 
                <h3 class="font-bold" >
                   After give a single input if you click the push button the value will be push on array and stack. By using pop button the value will be remove from array and stack. If you want to use the value but not removing, then you can click the peek button. And Empty button will clear the container.
                </h3>
                
                `,
        image: "/Images/stack/stack2.png",
        next: 4,
        prev: 2,
        isFinish: false,
      },
      4: {
        title: "Welcome to Stack Array tutorial",
        text: "This is a tutorial to help you get started with the Expression Tree. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
        body: `
                 <h3 class="font-bold" >
                  Extra tips is these colors bar are guides you to tell what element are in stack and array.
                </h3>
                
                `,
        image: "/Images/stack/ss4.png",
        next: -1,
        prev: 3,
        isFinish: true,
      },
    };
  }

  init() {
    //create a taliwind modal
  }

  show() {
    let selectedTutorialStep = [];
    if (this.tutorialType === "sort") {
      selectedTutorialStep = this.sortTutorialStep[this.selectedStep];
    } else if (this.tutorialType === "grid") {
      selectedTutorialStep = this.pathFindingTutorialStep[this.selectedStep];
    } else if (this.tutorialType === "expressionTree") {
      selectedTutorialStep = this.expressionTutorialStep[this.selectedStep];
    } else if (this.tutorialType === "stackArray") {
      selectedTutorialStep = this.stackArrayTutorialStep[this.selectedStep];
    } else if (this.tutorialType === "graph") {
      selectedTutorialStep = this.graphTutorialStep[this.selectedStep];
    }

    let tutorial = document.getElementById("tutorial");

    console.log(selectedTutorialStep);
    let title = document.getElementById("tutorial-title");
    let body = document.getElementById("tutorial-body");
    let image = document.getElementById("tutorial-image");
    let next = document.getElementById("tutorial-next");
    let prev = document.getElementById("tutorial-prev");
    let skip = document.getElementById("tutorial-skip");
    title.innerHTML = selectedTutorialStep.title;
    body.innerHTML = selectedTutorialStep.body;
    console.log(selectedTutorialStep.image);
    image.src = selectedTutorialStep.image;
    next.dataset.val = selectedTutorialStep.next;
    prev.dataset.val = selectedTutorialStep.prev;

    skip.innerHTML = "Skip Tutorial";
    tutorial.style.display = "block";
    if (selectedTutorialStep.isFinish) {
      next.innerHTML = "Finish Tutorial";
    }
  }

  hide() {
    document.getElementById("tutorial").style.display = "none";
  }

  setTutorial(number, type) {
    if (number === "-1") {
      this.hide();
      return;
    }
    this.tutorialType = type;
    this.selectedStep = number;

    this.show();
  }
}

//export default Tutorial;
