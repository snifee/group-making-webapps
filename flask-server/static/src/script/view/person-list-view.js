import { event } from "jquery";
import "../component/person-list.js";
import '../component/modal.js';
import makeTeam from "./make-team-function.js";
import students from "../data/dump";
import BrowserStorage from '../data/data.js';


function personListView(){
    const personList = document.createElement("person-list");
    personList.students = students;

    // const modal = document.createElement("modal-item");
    // personList.appendChild(modal);
    // personList.students = BrowserStorage.getAllData();

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


    return personList;

}


export default personListView;