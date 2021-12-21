import "../component/card-team.js";

function teamView(params) {
    let teams = localStorage.getItem("TEAM_RESULT");

    if (teams === null) {
        return 0;
    }

    teams = JSON.parse(teams);

    const numOfRow = Math.round(teams.length/3);

    const div = document.createElement("div");

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