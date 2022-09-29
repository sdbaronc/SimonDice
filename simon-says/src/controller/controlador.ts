
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
        console.log(this.partida1.GetNivel)
        if(this.partida1.GetNivel==-1){
            this.vista1.addToDisplay("Debe seleccionar un nivel")
        }
        else{
            this.vista1.addToDisplay("iniciaste la partida en nivel : ");
            this.calSecuencia;
        }
            
            //mientras la partidasté true

                    //cacleq
                    //muestreseq
                    //reciba seq
            


        })
    }
    public calSecuencia(){
        ///genera una nueva secuencia
        let n : number= this.partida1.GetSecuencia.length + 1;
        let vacia:number[]=[];
        this.partida1.SetSecuencia(vacia);
        for(let i:number=0;i<=n;i++){
            let npaso :number=Math.random()*3;
            this.partida1.GetSecuencia.push(npaso);

        }


    }
    public mostrarSecuencia(){
        ///recorre la secuencia y muestracadapaso()
    }
    public mostrarPaso(paso:number){
        ///segun el numero selecciona un boton para mostrar un paso con un sonido
    }
    

    
    
        
        
        // 2 iniciar juego-
        
    

   
   


}


