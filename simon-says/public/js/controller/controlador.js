// 1seleccionar nivel
//instanciar nivel
export class controladorPartida {
    constructor(partida1, vista1) {
        this.partida1 = partida1;
        this.vista1 = vista1;
    }
    determinarNivel() {
        let nivel;
        if (this.vista1.GetNivel == "dummie") {
            nivel = 100;
        }
        else if (this.vista1.GetNivel == "junior") {
            nivel = 90;
        }
        else {
            nivel = 80;
        }
        return nivel;
    }
    asignaLevel() {
        this.partida1.SetNivel(this.determinarNivel());
    }
}
// 2 iniciar juego- agregar nuevo paso de la secuencia- mostrar secuencia en pantalla
// 3 seleccionar secuencia -validar entradas segun orden y dentro del tiempo
//// 4 repetir 2 y 3 mientras el jugador cumpla las reglas
//// 5 si pierde revisar si el puntajes está en top 10
/////// 6 si está en top 10 pedir nombre y agregarlo, bajar a todos una casilla del top
//repetir
