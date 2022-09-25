export class vista {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this._display = this.getElement('.display');
        this._botonesNiveles = this.getElement('.boton');
    }
    set dispaly(dispaly) {
        this._display = dispaly;
    }
    get dispaly() {
        return this._display;
    }
    set botonNiveles(botonNiveles) {
        this._botonesNiveles = botonNiveles;
    }
    get botonNiveles() {
        return this._botonesNiveles;
    }
    addToDisplay(content) {
        this._display.innerHTML += `<p>${content}</p>`;
    }
    mostrarPaso(paso) {
    }
    mostrarSecuencia(secuencia) {
    }
}
/// 1cargar niveles
/// 2cargar lista top
/// 3recibir nivel 
/// 4mostrar secuencia
/// 5 repetir 4 hasta que juagdor pierda
/// recibir nombre nombre
/// refrescar pagina
