import students from "../data/dump";
import BrowserStorage from "../data/data.js";
import Team from "../data/team.js";

function checkArrayEqualElements(_array)
{
if(typeof _array !== 'undefined')    
    {
    return new Set(_array).size == 1;
    }
return "Array is Undefined";  
}

export default function makeTeam(numberOfTeam) {
    // const data = BrowserStorage.getAllData();

    const data = students.sort((firstItem, secondItem) => firstItem.id_personality - secondItem.id_personality);
    if(numberOfTeam>=data.length){
        alert("Too many num of team");
        return 0;
    }

    const memberEachTeam = Math.floor(data.length / numberOfTeam);
    const responsible = [];
    const lively = [];
    const extraverted = [];
    const dependable = [];
    const serious = [];
    
    data.forEach(i=>{
        if (i.personality === "responsible") {
            responsible.push(i);
        }else if (i.personality === "lively") {
            lively.push(i);
        }else if (i.personality === "extraverted") {
            extraverted.push(i);
        }else if (i.personality === "dependable") {
            dependable.push(i);
        }else if (i.personality === "serious") {
            serious.push(i);
        }
    })
    
    
    const teams =[]
    for (let i = 1; i <= numberOfTeam; i++) {
        teams.push(new Team(`TEAM${i}`));
    }
    

    const selectedMember = [];
                
                

    for (let i = 0; i < data.length; i++) {
        // console.log(i);
        for (let t = 0; t < teams.length; t++) {
            if (!(teams[t].members.map(member => member.personality).includes(data[i].personality))) {
                if (!(teams[t].members.map(member => member.personality).includes(data[i].name))) {
                    if ((teams[t].members.length<memberEachTeam) && !selectedMember.includes(data[i])) {
                        
                        selectedMember.push(data[i]);
                        teams[t].members.push(data[i]);
                        // break;
                    }else{
                        continue;

                    }

                }
            }
        }
    }


    const sisa = data.filter(x => !selectedMember.includes(x)) ;

    // console.log(teams.filter(x,y => x.members.length - y.members.length ))

    //Fiter minimal team
    
    
    
    if (!checkArrayEqualElements(teams.map(x => x.members.length))) {
        alert("y");
        sisa.forEach(item =>{
            let min = Math.min(...teams.map(item => item.members.length))
            teams.forEach(team => {
                // console.log(team);
                if (team.members.length == min) {
                    console.log(item);
                    console.log(team)
                    team.members.push(item);
                    return false;
                }
            })
        })
    }else{
        alert("s")
        teams.forEach(x=>{
            // while(sisa.length !=0) {
                x.members.push(sisa.pop());
    
                // sisa.splice(i,1);
    
                // break;
                
            // }
        })

    }

    // data.forEach(item =>{
    //     console.log(item);
    //     teams.every(team =>{
    //         if (!(team.members.map(member => member.personality).includes(item.personality))) {
    //             if (!(team.members.map(member => member.personality).includes(item.name))) {
    //                 if ((team.members.length<memberEachTeam)) {
                        
    //                     team.members.push(item);
    //                     data.splice()
    //                     return false;
    //                 }
    //             }
    //         }
    //     })
    // })
    

    return teams;
}

// export default makeTeam;