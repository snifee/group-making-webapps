import addPerson from "../view/add-person-view.js";
import questionForm from "../view/questions-form-view.js";
import "../component/form.js";
import BrowserStorage from "../data/data.js";
import personListView from "../view/person-list-view.js";
import "../component/modal.js";
import students from "../data/dump.js";
import teamView from "../view/team-view.js";

function removeAllChild(node) {
    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
      }
}

const header = document.createElement("header-item");
document.body.appendChild(header);

const mainTag = document.createElement('main');
document.body.appendChild(mainTag);

const modal = document.createElement("modal-item");
mainTag.appendChild(modal);

const container = document.createElement("div");
container.setAttribute("class","container-md")

function main() {

    // let p = students.map(student => student.personality);

    // // p = ["lively"];

    // console.log(p.includes("lively"));

    // const Form = document.createElement("form-set");
    
    location.hash = "#main";
    container.appendChild(personListView());

    window.addEventListener("hashchange", function() {
        if (location.hash === "#main") {

            removeAllChild(container)
            container.appendChild(personListView());
        
        }else if (location.hash === "#add-person") {
            
            removeAllChild(container);
            container.appendChild(addPerson());
        
        }else if (location.hash === "#question") {

            removeAllChild(container);
            container.appendChild(questionForm());
        
        }else if (location.hash === "#team") {
            if (localStorage.getItem("TEAM_RESULT") !== null) {
                removeAllChild(container);
                container.appendChild(teamView());
            }else{
                alert("No team found");
                location.hash = "#main";
            }
        }
    });
    


   
    // container.appendChild(questionForm());
    

    mainTag.appendChild(container);
}


export default main;