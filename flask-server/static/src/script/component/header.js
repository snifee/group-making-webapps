class Header extends HTMLElement{
    // constructor(){
    //     // this._shadowRoot = this.attachShadow({mode: 'open'});
    //     this.render();
    // }

    connectedCallback(){
        this.innerHTML = `
            <style>
                header{
                    background-color: black;
                    height: 3em;
                    margin: auto;
                    position: sticky;
                    top: 0;
                }
                h1{

                }
                ul li{
                    display:inline-block;
                    color: white;
                    margin: auto;
                }
                li{
                    padding: 10px;
                }

                li a{
                    text-decoration: none;
                    color: white;
                }

                #user{
                    padding: 10px;
                    margin: auto;
                    display: inline-block;
                    color: white;
                    font-weight: bold;
                    text-decoration: none;
                }
            </style>
            <header>
                <nav>
                    <div class="col">
                        <ul>
                            <li><a href="#main">Main</a></li>
                            <li><a href="#add-person">Add Person</a></li>
                        </ul>
                    </div>
                    <div class="col ">
                    </div>
                    <div class="col">
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define("header-item",Header);