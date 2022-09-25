export class vista{
    private _display: any;
    private _botonesNiveles: any;

    constructor() {        
        this._display = this.getElement('.display');
        this._botonesNiveles=this.getElement('.boton')    
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

    public set dispaly(dispaly: HTMLElement) {
        this._display = dispaly;
    }

    public get dispaly() {
        return this._display;
    }

    public set botonNiveles (botonNiveles: HTMLElement) {
        this._botonesNiveles = botonNiveles;
    }

    public get botonNiveles() {
        return this._botonesNiveles;
    }

    public addToDisplay(content: string): void {
        this._display.innerHTML += `<p>${content}</p>`
    }
    public mostrarPaso(paso:number):void{
       
    }
    public mostrarSecuencia(secuencia: number[]):void{


    }
}

/// 1cargar niveles
/// 2cargar lista top
/// 3recibir nivel 
/// 4mostrar secuencia


/// 5 repetir 4 hasta que juagdor pierda
/// recibir nombre nombre
/// refrescar pagina