// 1seleccionar nivel
//instanciar nivel
export class partida {
    constructor(nivel, vie) {
        this.nivel = nivel;
        this.vie = vie;
        this.estado = true;
        this.play();
        // 2 iniciar juego-
    }
    play() {
        // 2 iniciar juego- agregar nuevo paso de la secuencia- mostrar secuencia en pantalla
        //crear secuencia
        let nuevoPaso = Math.floor(Math.random() * 4);
        let secuencia = [];
        secuencia.push(nuevoPaso);
        this.vie.mostrarSecuencia(secuencia);
        this.vie.addToDisplay('<h1>' + nuevoPaso.toString() + '</h1>');
        //mostrar secu
    }
}
// 2 iniciar juego- agregar nuevo paso de la secuencia- mostrar secuencia en pantalla
// 3 seleccionar secuencia -validar entradas segun orden y dentro del tiempo
//// 4 repetir 2 y 3 mientras el jugador cumpla las reglas
//// 5 si pierde revisar si el puntajes está en top 10
/////// 6 si está en top 10 pedir nombre y agregarlo, bajar a todos una casilla del top
//repetir
