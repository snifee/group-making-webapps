import { event } from "jquery";

class Form extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `

        <form id="registrasi">
            <div class="row mb-3">
                <h2>Insert Your Name</h2>
                <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Input Name" id="inputName" required>
                </div>
            </div>
            <button type="submit" class="btn btn-dark">Go!</button>
        </form>
        `;

        document.querySelector("#registrasi").addEventListener("submit", (event)=>{
            this.value1 = document.getElementById("inputName").value;
            event.preventDefault();

            const tempData = JSON.stringify({name: this.value1});
            localStorage.setItem("TEMP_DATA",tempData);

            location.hash = "#question";
        });

    }

    get getValue1(){
        return this.value1;
    }
}


customElements.define("form-set",Form);