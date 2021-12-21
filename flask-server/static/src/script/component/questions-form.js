import { event } from "jquery";
import "./question-item.js";

class QuestionForm extends HTMLElement{

    set questions(questions){
        this._questions=questions;
    }

    connectedCallback(){
        this.innerHTML = `
            <style>
                .colcolor{
                    border: 1px solid rgba(0, 0, 0, 0.212);
                }

                .col-8{
                    overflow-y:scroll;
                    height: 500px;
                }
    
            </style>
                <form id="questionForm">
                    <h2>Answer the Question Below</h2>
                    <div class="row">
                        <div class="col">
                            <div id="list-example" class="list-group row">
                                <div class="kolom col"></div>
                            </div>
                            <button type="submit" class="btn btn-dark btn-primary">Submit</button>
                        </div>
                        <div class="col-8">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" class="question-list" class="scrollspy-example" >
                            </div>
                        </div>
                    </div>

                </form>
        `;

        let num = 0;
        let temp = 0;

        this._questions.forEach(question => {

            if (num%5===0) {
                const row = document.createElement("div");
                row.setAttribute("class",`row baris${num}`);
                this.getElementsByClassName("kolom")[0].appendChild(row);
                temp = num;
            }

            try {
                const div = document.createElement("div");
                div.setAttribute("class","col colcolor");
                const item = document.createElement("question-item");
                const anchorTag = document.createElement("a");
                anchorTag.setAttribute("class","list-group-item-action");
                anchorTag.setAttribute("href",`#${question.id}`);
                anchorTag.innerHTML = question.id;

                item.question = question; 
                this.getElementsByClassName("question-list")[0].appendChild(item);
                div.appendChild(anchorTag);
                this.getElementsByClassName(`baris${temp}`)[0].appendChild(div);
           
            } catch (error) {
                
            }
                

                num+=1;
            });


        document.querySelector('#questionForm').addEventListener("submit", (event) =>{
            this.answers = [];
            this._questions.forEach(q => {
               
                let answ =  document.querySelector('input[name="'+ q.id +'"]:checked').value;

                try {
                    answ = parseInt(answ);
                } catch (error) {
                    answ = 0;
                }
                this.answers.push(parseInt(answ));
            });
            
            
            event.preventDefault();

            let tempData = localStorage.getItem("TEMP_DATA");

            if (tempData == null) {
                alert("Data Hilang, Kembali ke masukkan data");

                location.hash = "#add-person";
            }else{

                tempData = JSON.parse(tempData);
    
                tempData["answers"] = this.answers;
    
                console.log(tempData);
    
                tempData = JSON.stringify(tempData);
    
                localStorage.setItem("TEMP_DATA",tempData);

                location.hash = "#main";

                
            }

        })
    }


}


customElements.define("questions-form",QuestionForm);