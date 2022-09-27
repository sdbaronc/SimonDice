export class puntajeTop {
    constructor(nombre, nivel, puntaje) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntaje = puntaje;
    }
}
export class partida {
    constructor(nivel) {
        this.nivel = nivel;
        this.estado = true;
        this.secuencia = [];
    }
    set SetNivel(nivel) {
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
    set SetSecuencia(secuencia) {
        this.secuencia = secuencia;
    }
    get GetSecuencia() {
        return this.secuencia;
    }
}
