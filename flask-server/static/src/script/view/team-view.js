import "../component/card-team.js";

function teamView(params) {
    let teams = localStorage.getItem("TEAM_RESULT");

    if (teams === null) {
        return 0;
    }

    
    // console.log('hhhhh')
    // console.log(typeof(teams))
    
    teams = JSON.parse(teams);

    const numOfRow = Math.ceil(teams.length/3);

    // console.log(numOfRow)

    const div = document.createElement("div");
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Teams Result'
    div.appendChild(h1);

    for (let i = 0; i < numOfRow; i++) {
        const row = document.createElement("div");
        row.setAttribute("class","row");
        for (let j = 0; j < 3; j++) {
            const col = document.createElement("div");
            col.setAttribute("class","col");
            
            const card = document.createElement("team-card");
            card.team = teams.shift();
            
            col.appendChild(card);

            row.appendChild(col);
        }

        div.appendChild(row);
        
    }

    return div;
}


export default teamView;