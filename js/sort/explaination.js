class Explanation{
    constructor(container, bar) {
        this.createExplanation(container, bar);
        this.explanationElement=document.getElementById('explanation');
    }
    createExplanation(container, bar) {
        let body=document.body;
        let div=document.createElement('div');
        div.setAttribute('id','explanation');
        div.style.position='absolute';
        div.style.bottom='0';
        div.style.right='0';
        div.style.width='25%';
        div.style.height='30%';
        div.style.backgroundColor='lightblue';
        div.style.zIndex='100';
        div.style.display='none';
        div.style.justifyContent='center';
        div.style.alignItems='center';
        div.style.flexDirection='column';
        body.appendChild(div);
        let h1=document.createElement('h1');
        h1.innerHTML='Explanation';
        div.appendChild(h1);
        let p=document.createElement('p');
        p.setAttribute('id','explanationParagraph');
        p.innerHTML='This is an explanation of the algorithm';
        div.appendChild(p);
        let button=document.createElement('button');
        button.innerHTML='Close';
        button.style.backgroundColor='red';
        button.style.color='white';
        button.style.border='none';
        button.style.borderRadius='5px';
        button.style.padding='5px';
        button.style.margin='5px';
        button.style.cursor='pointer';
        button.addEventListener('click',()=>{
            div.style.display='none';
        }

        );
        div.appendChild(button);


    }




    showExplanation() {
        let explanation=document.getElementById('explanation');
        explanation.style.display='flex';
    }
    hideExplanation() {
        let explanation=document.getElementById('explanation');
        explanation.style.display='none';
    }
    setMessage(msg) {
        let p=document.getElementById('explanationParagraph');
        p.innerHTML=msg;
    }

}
export default Explanation;