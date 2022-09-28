
////1 selecionar nivel
////2 crear partida con ese nivel
////3 start partida
////4generar paso
///5mostrar paso
///6recivir paso
import { vista} from "../view/vista.js";
import { partida } from "../model/modelo.js";


export class controladorPartida{
    private partida1: partida;
    private vista1:vista;

    constructor(partida1:partida, vista1:vista){
        this.partida1=partida1;
        this.vista1=vista1;
        this.vista1.obtenerBoton();
        this.asignaLevel();
        this.vista1.addToDisplay(this.partida1.GetNivel.toString());

    }
    public determinarNivel():number{
        console.log(this.vista1.GetNivel)
        let nivel : number;
        if (this.vista1.GetNivel=="Dummie"){
            nivel=100;
        }else if (this.vista1.GetNivel=="Junior"){
            nivel=90;
        }else if(this.vista1.GetNivel=="Senior"){
            nivel=80;
        }
        else{
            nivel=10;
        }
        return nivel;
    }

    public asignaLevel():void{
        
        this.partida1.SetNivel(this.determinarNivel());
        
        
    }
    

    
    
        
        
        // 2 iniciar juego-
        
    

   
   


}
 







