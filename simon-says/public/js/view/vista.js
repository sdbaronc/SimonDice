export class vista {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this.display = this.getElement('.display');
        this.botonN = this.getElement('.botonN');
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
    SelectNivel(nivel) {
        nivel.addEventListener('click', () => {
            this.nivelN = nivel.value;
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
