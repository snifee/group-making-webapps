import '../component/questions-form.js';
import questions from '../data/question.js';


function questionForm(){
    const questionForm = document.createElement("questions-form");

    try {
        questionForm.questions = questions;
    } catch (message) {
        console.log(message);
    }

    return questionForm;
}

export default questionForm;
