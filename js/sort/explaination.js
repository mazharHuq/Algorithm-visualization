class Explanation {
    constructor(container, bar) {
        this.createExplanation(container, bar);
        this.explanationElement = document.getElementById('explanation');
    }

    createExplanation() {

    }


    showExplanation() {
        let explanation = document.getElementById('codeChange');
        explanation.style.display = 'flex';
    }

    hideExplanation() {
        let explanation = document.getElementById('codeChange');
        explanation.style.display = 'none';
    }

    setMessage(msg) {
        let p = document.getElementById('codeChange');
        p.innerHTML = msg;
    }

}