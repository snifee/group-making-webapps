import { event } from "jquery";
import "../component/person-list.js";
import '../component/modal.js';
import makeTeam from "./make-team-function.js";
import students from "../data/dump";
import BrowserStorage from '../data/data.js';


function personListView(){
    let data = BrowserStorage.getAllData();
    if (data !== null) {

        const person = [];

        data.forEach(item => {
            person.push(JSON.parse(item));
        })
        
        const personList = document.createElement("person-list");
        // personList.students = students;
    
        personList.students = person;
    
        // const modal = document.createElement("modal-item");
        // personList.appendChild(modal);
    
        const buttonCreateTeam = document.createElement("button");
        buttonCreateTeam.innerHTML="Create Team";
        buttonCreateTeam.setAttribute("class","btn btn0 btn-dark");
        buttonCreateTeam.setAttribute("data-bs-toggle", "modal");
        buttonCreateTeam.setAttribute('href',"#exampleModalToggle");
        personList.appendChild(buttonCreateTeam);
    
        buttonCreateTeam.addEventListener("click",event =>{
    
            const numOfMember = prompt("Input Number of Member");
    
            const dataTeam = makeTeam(numOfMember);
    
            console.log(dataTeam)
    
            localStorage.setItem("TEAM_RESULT",JSON.stringify(dataTeam));
    
    
            location.hash = '#team';
        })

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML="Delete All Person";
        deleteButton.setAttribute("class","btn btn0 btn-dark");
        deleteButton.setAttribute("data-bs-toggle", "modal");
        deleteButton.setAttribute('href',"#exampleModalToggle");
        personList.appendChild(deleteButton);

        deleteButton.addEventListener("click", event =>{
            localStorage.removeItem("APP_DATA");
            location.reload();
        })
    
    
        return personList;
    }

    // const divForNull = document.createElement("div");
    // divForNull.style.backgroundImage = "url(./5431519.jpg)"

    const h1 = document.createElement('h1');
    h1.innerHTML = "Welcome, Let's make your team!";

    // divForNull.appendChild(h1);


    return h1;

}


export default personListView;