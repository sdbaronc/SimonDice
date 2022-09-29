export class puntajeTop {
    constructor(nombre, nivel, puntaje) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntaje = puntaje;
    }
}
export class partida {
    constructor() {
        this.nivel = -1;
        this.estado = true;
        this.secuencia = [];
    }
    SetNivel(nivel) {
        this.nivel = nivel;
    }
    get GetNivel() {
        return this.nivel;
    }
    set SetEstado(estado) {
        this.estado = estado;
    }
    get GetEstado() {
        return this.estado;
    }
    SetSecuencia(secuencia) {
        this.secuencia = secuencia;
    }
    get GetSecuencia() {
        return this.secuencia;
    }
}
