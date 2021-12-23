import { event } from "jquery";
import "./question-item.js";
import BrowserStorage from "../data/data.js";

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

                .list-group{
                    overflow-y:auto;
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
                if (question.id.includes("01")) {
                    const h3 = document.createElement("h3");
                    h3.innerHTML = question.id.substr(0, 3)
                    this.getElementsByClassName(`baris${temp}`)[0].appendChild(h3)
                }
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
            


            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": "12345"
                },
                body: JSON.stringify(this.answers)
            }


            const sendResult = fetch(`http://127.0.0.1:5000/predict`, options)
                .then((response) => response.json())
                .then((response) =>{
                    console.log("hehe" + response.value)
                        
                    let tempData = localStorage.getItem("TEMP_DATA");
        
                    tempData = JSON.parse(tempData);
        
                    tempData["id_personality"] = response.value;
                    
                    if(response.value === 0){
                        tempData["personality"] = "Cluster1";
                    }else if(response.value === 1){
                        tempData["personality"] = "Cluster2";
                    }else if(response.value === 2){
                        tempData["personality"] = "Cluster3";
                    }else if(response.value === 3){
                        tempData["personality"] = "Cluster4";
                    }else if(response.value === 4){
                        tempData["personality"] = "Cluster5";
                    }else{
                        tempData["personality"] = "?";
                    }

            
                    console.log(tempData);
        
                    tempData = JSON.stringify(tempData);
            
                    //     localStorage.setItem("TEMP_DATA",tempData);
        
                    BrowserStorage.saveDataPerson(tempData);
        
                    location.hash = "#main";
                })

                
                
            
            event.preventDefault();

            
            

        })
    }


}


customElements.define("questions-form",QuestionForm);