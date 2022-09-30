


export class puntajeTop{
    
    public nombre:string;
    public nivel: string;
    public puntaje:number;

    constructor (nombre:string, nivel:string, puntaje:number ){
        this.nombre=nombre;
        this.nivel=nivel;
        this.puntaje=puntaje
        


    }
    
}
export class partida{
    private nivel: number;
    private estado: boolean;
    private secuencia: number[];

    constructor(){
        this.nivel=-1;
        this.estado=true;
        this.secuencia=[];

    }
    public  SetNivel (nivel: number){
        this.nivel=nivel;

    }
    public get GetNivel(){
        return this.nivel;
    }
    public set SetEstado (estado:boolean){
        this.estado=estado;

    }
    public get GetEstado(){
        return this.estado;
    }
    public set SetSecuencia (secuencia:number[]){
        this.secuencia=secuencia;

    }
    public get GetSecuencia(){
        return this.secuencia;
    }
   
    
    public vaciarSeq(){
        this.secuencia=[];
    }
    
    public modiEstado(estado:boolean) {
        this.estado=estado;
    }

    
}