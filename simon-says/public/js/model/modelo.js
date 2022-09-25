export var niveles;
(function (niveles) {
    niveles[niveles["dummie"] = 150] = "dummie";
    niveles[niveles["junior"] = 110] = "junior";
    niveles[niveles["senior"] = 80] = "senior";
})(niveles || (niveles = {}));
export class puntajeTop {
    constructor(nombre, nivel, puntaje) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntaje = puntaje;
    }
}
