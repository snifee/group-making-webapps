class Question extends HTMLElement{

    set question(question){
        this._question = question;
        this.render();
    }

    render(){
        this.innerHTML = `
            <style>
                .question{
                    border:1px solid rgba(0, 0, 0, 0.212);
                    border-radius: 5px;
                    padding: 10px;
                    margin: auto;
                    background-color: white;
                }
            </style>
            <div class="mb-3 question" id="question${this._question.id}">
                <label>${this._question.id}</label>
                <br>
                <label id="${this._question.id}" for="question-${this._question.id}"  class="form-label"><strong>${this._question.question}</strong></label>
                <div class="answer-${this._question.id}">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="${this._question.id}inlineRadio1" value="1" required checked>
                        <label class="form-check-label" for="inlineRadio1">Strongly Disagree</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="${this._question.id}inlineRadio2" value="2">
                        <label class="form-check-label" for="inlineRadio2">Disagree</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="${this._question.id}inlineRadio3" value="3" >
                        <label class="form-check-label" for="inlineRadio3">Netral</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="${this._question.id}inlineRadio4" value="4">
                        <label class="form-check-label" for="inlineRadio3">Agree</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="${this._question.id}" id="${this._question.id}inlineRadio5" value="5" >
                        <label class="form-check-label" for="inlineRadio3">Strongly Agree</label>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("question-item",Question);