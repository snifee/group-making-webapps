class PersonList extends HTMLElement{

    set students(students){
        this._students = students;
        this.render();
    }

    render(){
        this.innerHTML=`
        <style>
            #title{
                padding: 5px;
            }
        </style>
        <h2 id="title">Person Listed</h2>
        `;
        
        
        if (this._students.length === 0) {
            this.innerHTML=`No Person`;
            
        }else{
            
            this._students.forEach(student => {
                const div = document.createElement('div');
                div.innerHTML=`
                    <style>
                        .div-person{
                            padding: 5px;
                            border: 1px solid rgba(0, 0, 0, 0.212);
                            margin: 5px;
                            border-radius: 5px;
                        }

                    </style>
                    <div class="row div-person" id="$ {this.identity.id}">
                        <h3>${student.name}</h3>
                        <h4>${student.personality}</h4>
                    </div>
                `;
    
                this.appendChild(div);
            });
        }
    }
}

customElements.define("person-list",PersonList);