export class vista {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this.display = this.getElement('.display');
        this.nivelN = "sn";
        this.botonS = this.getElement('.botonS');
    }
    set SetDisplay(dispaly) {
        this.display = dispaly;
    }
    get dispaly() {
        return this.display;
    }
    set SetBotonN(botonN) {
        this.botonN = botonN;
    }
    get GetBotonN() {
        return this.botonN;
    }
    set SetBotonS(botonS) {
        this.botonS = botonS;
    }
    get GetBotonS() {
        return this.botonS;
    }
    set SetNivel(niveln) {
        this.nivelN = niveln;
    }
    get GetNivel() {
        return this.nivelN;
    }
    addToDisplay(content) {
        this.display.innerHTML += `<p>${content}</p>`;
    }
    obtenerBoton() {
        const d = this.getElement('#dummie');
        const j = this.getElement('#junior');
        const s = this.getElement('#senior');
        this.SelectNivel(d);
        this.SelectNivel(j);
        this.SelectNivel(s);
    }
    SelectNivel(nivel) {
        nivel.addEventListener('click', () => {
            console.log(nivel);
            this.nivelN = nivel.textContent;
            this.botonN = nivel;
        });
    }
}
/// 1cargar niveles
/// 2cargar lista top
/// 3recibir nivel 
/// 4mostrar secuencia
/// 5 repetir 4 hasta que juagdor pierda
/// recibir nombre nombre
/// refrescar pagina
