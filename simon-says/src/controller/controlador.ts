

import { vista} from "../view/vista.js";

// 1seleccionar nivel
//instanciar nivel
export class partida{
    public nivel: number;
    public vie: vista;
    public estado: boolean;
    constructor(nivel: number, vie:vista){
        this.nivel=nivel;
        this.vie=vie;
        this.estado=true;
        
        
        // 2 iniciar juego-
        
    }

   
   


}
 


// 2 iniciar juego- agregar nuevo paso de la secuencia- mostrar secuencia en pantalla
// 3 seleccionar secuencia -validar entradas segun orden y dentro del tiempo
//// 4 repetir 2 y 3 mientras el jugador cumpla las reglas
//// 5 si pierde revisar si el puntajes está en top 10
/////// 6 si está en top 10 pedir nombre y agregarlo, bajar a todos una casilla del top
//repetir




