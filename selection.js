const initailColor="#1fbfb8";
const travarseColor="#1978a5";
const targetColor="red";
const resultColor="blue";
$(document).ready(function () {
    const speedButton=$("#speed");
    var speed=speedButton.val();
    speedButton.on('change',()=>{
        speed=2*speedButton.val();
        console.log(speedButton.val());
    });
    var arr=[];
    $("#createArray").on("click",()=>{
        $(".mother").html('');
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
              window.clearInterval(i);
            }
          }, 0);
         arr = createArray();
        CreateBar(arr);
       
    });
    $("#sortArray").on("click",()=>{
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
              window.clearInterval(i);
            }
          }, 0);
        const NewArray=[...arr];
        const sortArr=sortArray(arr);
        visulaizeSelectionSort(sortArr,NewArray);


    });

    
    

    const createArray = () => {
        let array = [];

        let limit = Math.round(Math.random(2, 122) * 40)+1;
        while (limit) {
            if (limit === 0) break;
            array.push(Math.round(Math.random(2, 122) * 50) + 1)
            limit--;
        }
        return array;

    }



    
   
    const CreateBar=(arr)=>{
        var lls = 0;
        arr.forEach((value, index) => {
            lls += 40;
            let node = $("<li></li>")
                .css({
                    height: value * 10 + "px",
                    left: lls + "px"
                }).addClass("shadow");
               ;
                let textNode=$("<span><span/>") .text(value);
            node.attr("id", index);
            node.append(textNode);
            $(".mother").append(node);
    
        });
    }
    

   const sortArray=(arr)=>{
    const sortArr = [];
    for (let step = 0; step < arr.length; step++) {
        let minV = 99999999;
        let minIndex = 0;
        for (let i = step; i < arr.length; i++) {
            if (minV > arr[i]) {
                minV = arr[i];
                minIndex = i;

            }
        }
        sortArr.push([step, minIndex])

        arr[minIndex] = arr[step];
        arr[step] = minV;
        
    }
    return sortArr;
   }
    
   

    const findValue = (elementName, type) => {
        var element = document.getElementById(elementName);
        let style = window.getComputedStyle(element);
        let top = style.getPropertyValue(type);

        return top;
    };
  

    function animateFindMin(i) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (sortArr[i][1] != i) {

                    // $("#"+i).animate({  backgroundColor: "purple"});
                    $("#" + i).animate({ backgroundColor: "yellow" });

                } else {

                    $("#" + i).animate({ backgroundColor: "black", color: "white" });
                }


                resolve("Done ")
            }, 500);
        });
    }


    function swapNode(sortArr,i) {
        return new Promise(resolve => {
            setTimeout(() => {
                let val = sortArr[i];
                let left1 = findValue(val[0], "left");
                let left2 = findValue(val[1], "left");
                $("#" + val[1]).animate({ left: left1, backgroundColor: resultColor });

                $("#" + val[0]).animate({ left: left2, backgroundColor:initailColor });
                let firstGorib = $("#" + val[1]);
                let secondGorib = $("#" + val[0]);
                firstGorib.attr('id', val[0]);
                secondGorib.attr('id', val[1]);
                if(val[0]==val[1]){
                    $("#" + val[1]).animate({ left: left1, backgroundColor: resultColor });

                }
                resolve("k");

            }, 1000-speed);
        });
    }
  
    const findMinVal = (i,color) => {
        return new Promise(res => {
            setTimeout(() => {
                $("#" + i).animate({ backgroundColor: color });
                res('dome')
            }, 259-speed);
        });
    }
    

    const visulaizeSelectionSort = async (sortArr,NewArray) => {
        for (let index = 0; index < sortArr.length; index++) {
            
            let minV = NewArray[index];
            let minIndex = -1;
            
            for(let i =index;i<NewArray.length;i++){
                $("#minValue").text(minV);

                await findMinVal(i,travarseColor);
                   // console.log(currentMin,NewArray[i]);
                   $("#checkSection").text(
                       "Check if "+NewArray[i]+ " is Less than " +minV
                   );  
                if(minV>NewArray[i]){
                    $("#resultSection").text(
                        "Swapping "+NewArray[i]+ " with  " +minV +
                        ".The New Min Value is "+NewArray[i]
                    );
                    minV=NewArray[i];
                    if(minIndex>-1){
                        await findMinVal(minIndex,initailColor);
                    }
                    minIndex=i;
                   
                    await findMinVal(i,targetColor);
                   
                    
                }else{
                    await findMinVal(i,initailColor) 
                }
                //if(i)
               // console.log("Hello" + i);

            }

            await swapNode(sortArr,index);
            NewArray[minIndex] = NewArray[index];
            NewArray[index] = minV;
           
            
        }
    }
   
    arr = createArray();
    CreateBar(arr);
    // asyncCall(0);



});
