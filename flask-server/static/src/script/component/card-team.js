class CardTeam extends HTMLElement{
    set team(team){
        this._team = team;
    }
    connectedCallback(){
        this.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${this._team.teamID}
            </div>
            <ul class="list-group list-group-flush" id="teamMember${this._team.teamID}">
                
            </ul>
        </div>
        `;

        this._team.members.forEach(member => {
            const li = document.createElement('li');
            li.innerHTML = member.name +' ['+member.personality+']';
            li.setAttribute("class","list-group-item");

            document.getElementById(`teamMember${this._team.teamID}`).appendChild(li);
        });
    }
}


customElements.define("team-card",CardTeam);