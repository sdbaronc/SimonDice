


import { vista} from "../view/vista.js";
import { partida } from "../model/modelo.js";

// 1seleccionar nivel
//instanciar nivel
export class controladorPartida{
    private partida1: partida;
    private vista1:vista;

    constructor(partida1:partida, vista1:vista){
        this.partida1=partida1;
        this.vista1=vista1;
    }
    public determinarNivel():number{
        let nivel : number;
        if (this.vista1.GetNivel=="dummie"){
            nivel=100;
        }else if (this.vista1.GetNivel=="junior"){
            nivel=90;
        }else{
            nivel=80;
        }
        return nivel;}

    public asignaLevel():void{
        
        this.partida1.SetNivel(this.determinarNivel());
        
        
    }
    

    
    
        
        
        // 2 iniciar juego-
        
    

   
   


}
 


// 2 iniciar juego- agregar nuevo paso de la secuencia- mostrar secuencia en pantalla
// 3 seleccionar secuencia -validar entradas segun orden y dentro del tiempo
//// 4 repetir 2 y 3 mientras el jugador cumpla las reglas
//// 5 si pierde revisar si el puntajes está en top 10
/////// 6 si está en top 10 pedir nombre y agregarlo, bajar a todos una casilla del top
//repetir




