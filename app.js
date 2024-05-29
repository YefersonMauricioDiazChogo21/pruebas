import{formulario} from "./form.js";

export class interfaz extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode:"open"});
        this.shadowRoot.innerHTML=/*Html*/`
        <style rel="stylesheet">
        @import "./bootstrap/css/bootstrap.min.css";
        @import "./style.css";
        </style>
        <nav class="navbar ">
        <div class="container-fluid">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <a class="navbar-brand">Confecciones Pepita</a>
                <img class="logo" src="img/logo.png" alt="">
            </div>
          <form class="d-flex search" role="search">
            <button class="btn btn-outline-dark" type="submit">Salir</button>
          </form>
        </div>
        </nav>
        <div class="d-flex">
        <div class="menu ">
          <button class="llamar btn btn-danger">llamar</button>
        </div>
        <div class="info">
          <info-div>
    
          </info-div>
          
        </div>
        </div>
        `
        const btnLlamar=this.shadowRoot.querySelector('.llamar');
        console.log(btnLlamar)
        btnLlamar.addEventListener('click', () => {
            console.log('hola')
        })
        
    }
    
};

customElements.define("interfaz-div",interfaz);




