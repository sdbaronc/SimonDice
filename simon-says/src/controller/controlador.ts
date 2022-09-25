
import { niveles} from "../model/modelo.js";
import { vista} from "../view/vista.js";

// 1seleccionar nivel
//instanciar nivel
export class partida{
    public nivel: niveles;
    public vie: vista;
    public estado: boolean;
    constructor(nivel: niveles, vie:vista){
        this.nivel=nivel;
        this.vie=vie;
        this.estado=true;
        this.play();
        
        // 2 iniciar juego-
        
    }

    public play():void{
        // 2 iniciar juego- agregar nuevo paso de la secuencia- mostrar secuencia en pantalla
        //crear secuencia
         let nuevoPaso=Math.floor(Math.random()*4)
         let secuencia:number[]=[];
         secuencia.push(nuevoPaso)
         this.vie.mostrarSecuencia(secuencia);
         this.vie.addToDisplay('<h1>'+ nuevoPaso.toString() +'</h1>')



        //mostrar secu


    }
   


}
 


// 2 iniciar juego- agregar nuevo paso de la secuencia- mostrar secuencia en pantalla
// 3 seleccionar secuencia -validar entradas segun orden y dentro del tiempo
//// 4 repetir 2 y 3 mientras el jugador cumpla las reglas
//// 5 si pierde revisar si el puntajes está en top 10
/////// 6 si está en top 10 pedir nombre y agregarlo, bajar a todos una casilla del top
//repetir




