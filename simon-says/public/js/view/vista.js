export class vista {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this.display = this.getElement('.display');
        this.botond = this.getElement('#dummie');
        this.botonj = this.getElement('#junior');
        this.botons = this.getElement('#senior');
        this.nivelN = "sn";
        this.botonI = this.getElement('.btn');
    }
    set SetDisplay(dispaly) {
        this.display = dispaly;
    }
    get dispaly() {
        return this.display;
    }
    set SetBotond(botond) {
        this.botond = botond;
    }
    get GetBotond() {
        return this.botond;
    }
    set SetBotonj(botonj) {
        this.botonj = botonj;
    }
    get GetBotonj() {
        return this.botonj;
    }
    set SetBotons(botons) {
        this.botons = botons;
    }
    get GetBotons() {
        return this.botons;
    }
    set SetBotonI(botonS) {
        this.botonI = botonS;
    }
    get GetBotonI() {
        return this.botonI;
    }
    SetNivel(niveln) {
        this.nivelN = niveln;
    }
    get GetNivel() {
        return this.nivelN;
    }
    addToDisplay(content) {
        this.display.innerHTML = `<p>${content}</p>`;
    }
}
/// 1cargar niveles
/// 2cargar lista top
/// 3recibir nivel 
/// 4mostrar secuencia
/// 5 repetir 4 hasta que juagdor pierda
/// recibir nombre nombre
/// refrescar pagina
