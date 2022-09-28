
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
        this.ativarInicio();
        this.obtenerNivel();
        
        
        

    }
    public determinarNivel():number{
        
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
        this.vista1.addToDisplay("Eres un gugador :   "+this.vista1.GetNivel);
        
        
    }
    public obtenerNivel(){
        this.vista1.GetBotond.addEventListener("click", () => {
            this.obtenerContenido(this.vista1.GetBotond)

        });
        this.vista1.GetBotonj.addEventListener("click",()=>{this.obtenerContenido(this.vista1.GetBotonj)});
        this.vista1.GetBotons.addEventListener("click",()=>{this.obtenerContenido(this.vista1.GetBotons)});
    }
    public obtenerContenido(elemento:HTMLElement){
        this.vista1.SetNivel(elemento.textContent!);
        console.log(this.vista1.GetNivel);
        this.asignaLevel();
        
    }
    public ativarInicio(){
        this.vista1.GetBotonI.addEventListener("click",()=>{
            this.vista1.addToDisplay("iniciaste la partida en nivel : ");
        })
    }
    

    
    
        
        
        // 2 iniciar juego-
        
    

   
   


}
 







