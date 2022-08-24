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
                    height: value * 5 + "px",
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
  

  
   
  

    const takeUp=(i)=>{
        return new Promise(res=>{
            setTimeout(()=>{
            
                $("#"+i).animate({
                    bottom:"00px",
                })
               
                res("Done Upping")
            },400);
        });
    }
    const takeDown=(i)=>{
        return new Promise(res=>{
            setTimeout(()=>{
              
                $("#"+i).animate({
                    bottom:"-300px",backgroundColor:targetColor
                })
               
                res("Done Upping")
            },400);
        });
    }
   
    



    const visulaizeSelectionSort = async (sortArr,NewArray) => {
        //getState(sortArr, NewArray);
        visulaizeSelectionSortTep(sortArr, NewArray);
        return;
    }
    const swap=(left,right)=>{
        return new Promise(resolve => {
            setTimeout(() => {
                
                let left1 = findValue(left, "left");
                let left2 = findValue(right, "left");
                $("#" + left).animate({ left: left2, backgroundColor:targetColor });

                $("#" + right).animate({ left: left1, backgroundColor:initailColor });
                let firstGorib = $("#" + left);
                let secondGorib = $("#" + right);
                firstGorib.attr('id', right);
                secondGorib.attr('id', left);
                console.log(firstGorib,secondGorib);
                resolve("k");

            }, 400);
        });

    }
    const colorAll=(i)=>{
        return new Promise(
                    resolve=>{
                       
                      setTimeout(() => {
                        while(i){
                            $("#" + parseInt(i-1)).css({"background-color": resultColor});
                            i--;
                            console.log(i);
                        }
                        
                        resolve("coloring done")
                      }, 1000);
                    }
    );
    }
    const visulaizeSelectionSortTep = async (sortArr,NewArray) => {
        let states=[];
        states = getState(sortArr, NewArray);
        console.log(states,"states");
      
          for (let index = 0; index < states.length; index++) {
              const element = states[index];
              
        
        if(element[0]==-1){
            if (element[1][1]=="D") {
                let x=element[1][0];
                await colorAll(x);
               await  takeDown(element[1][0]);
            } else {

              await  takeUp(element[1][0]);
             
            }

        } else {
          await swap(element[0][0],element[1][0])
           
        }  
       }
    }

    const getState = (sortArr,NewArray) => {
     
        let states = [];
        for (let index = 1; index < NewArray.length; index++) {

            let currentIndex=index;
            let ok = [[-1],[currentIndex, "D"]];
            states.push(ok);
            for(let i=index-1;i >=0;i--){
                if(NewArray[currentIndex]<NewArray[i]){
                    ok = [[currentIndex, "L"], [i, "R"]];
                    states.push(ok);
                    let temp=NewArray[currentIndex];
                    NewArray[currentIndex]=NewArray[i];
                    NewArray[i]=temp;
                    currentIndex--;
                  
                }else{
                    break;
                }
            }
            ok = [[-1],[currentIndex, "U"]];
            states.push(ok);  
        }
       // console.log(states);
        return states;
    }
   
    arr = createArray();
    CreateBar(arr);
    // asyncCall(0);



});
