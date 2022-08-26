class Tutorial {
    constructor(tutorial) {
        this.init();
        this.selectedStep = 1;
        this.tutorialType='sort';
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
            }, 2: {
                title: "Selecting a sorting algorithm",
                text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
                body: `
                 <h2 class="text-2xl font-semibold "> Select a Sorting Algorithm from the dropdown.</h2>
                
                
                `,
                image: "../Images/tutorial-sort/select_sort_algo.png",
                next: 3,
                prev: 1,
                isFinish: false,
            }, 3: {
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

            }

        };
        this.gridTutorialStep={
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
            },   2: {
                title: "Welcome to the tutorial 2",
                text: "This is a tutorial to help you get started with the  sorting system. You can skip this tutorial at any time by clicking the 'Skip Tutorial' button. You can also click the 'Next' button to go to the next step in the tutorial.",
                body: `
                 <h2 class="text-2xl font-semibold "> This short tutorial will walk you through all the features of this application.</h2>
                <h3 class="font-bold" >
                    If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!
                </h3>
                
                `,
                image: "../Images/bar.png",
                next: 3,
                prev: 1,
                isFinish: false,
            },

        };
        this.graphTutorialStep={
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
        };
        this.expressionTutorialStep= {
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
        };

    }

    init() {
        //create a taliwind modal


    }

    show() {
        let selectedTutorialStep=[];
        if(this.tutorialType==="sort"){
           selectedTutorialStep = this.sortTutorialStep[this.selectedStep];
        }else if(this.tutorialType==='grid'){
             selectedTutorialStep = this.gridTutorialStep[this.selectedStep];
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
        if(selectedTutorialStep.isFinish){
            next.innerHTML = "Finish Tutorial";
        }


    }

    hide() {
        document.getElementById("tutorial").style.display = "none";
    }

    setTutorial(number,type) {
        if(number === "-1"){
            this.hide();
            return;
        }
        this.tutorialType = type;
        this.selectedStep = number;

        this.show();
    }


}

export default Tutorial;