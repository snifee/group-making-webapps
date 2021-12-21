class Team{
    members = [];
    constructor(teamID){
        this.teamID  = teamID;
    }

    pushMember(member){
        this.members.push(member);
    }

    get members(){
        return this.members;
    }


}

export default Team;