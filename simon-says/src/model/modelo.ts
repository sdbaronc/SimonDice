
export enum niveles{
    dummie =150,
    junior =110,
    senior =80,
}


export class puntajeTop{
    public nombre:string;
    public nivel: niveles;
    public puntaje:string;

    constructor (nombre:string, nivel:niveles, puntaje:string ){
        this.nombre=nombre;
        this.nivel=nivel;
        this.puntaje=puntaje


    }
}
