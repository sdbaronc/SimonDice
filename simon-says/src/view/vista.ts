export class vista{
    private display: any;
    private botonN: any;
    private nivelN: string
    private botonS: any;

    constructor() {        
        this.display = this.getElement('.display');
        
        this.nivelN="sn"
        this.botonS=this.getElement('.botonS');
        
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);
    

    public set SetDisplay(dispaly: HTMLElement) {
        this.display = dispaly;
    }

    public get dispaly() {
        return this.display;
    }

    public set SetBotonN (botonN: HTMLElement) {
        this.botonN = botonN;
    }

    public get GetBotonN() {
        return this.botonN;
    }
    
   
    public set SetBotonS (botonS: HTMLElement) {
        this.botonS = botonS;
    }

    public get GetBotonS() {
        return this.botonS;
    }

    public set SetNivel (niveln: string) {
        this.nivelN = niveln;
    }

    public get GetNivel() {
        return this.nivelN;
    }






    public addToDisplay(content: string): void {
        this.display.innerHTML += `<p>${content}</p>`
    }
    public obtenerBoton(){
        const d : HTMLElement= this.getElement('#dummie')! as HTMLElement;
        const j : HTMLElement= this.getElement('#junior')! as HTMLElement;
        const s : HTMLElement= this.getElement('#senior')! as HTMLElement;
        this.SelectNivel(d);
        this.SelectNivel(j);
        this.SelectNivel(s);
        
       
        

    }
    public SelectNivel(nivel:HTMLElement):void{
        
        nivel.addEventListener('click',()=>{
            console.log(nivel);
            this.nivelN=nivel.textContent!;
            this.botonN=nivel;
        });
      
       
    }
   
   
}

/// 1cargar niveles
/// 2cargar lista top
/// 3recibir nivel 
/// 4mostrar secuencia


/// 5 repetir 4 hasta que juagdor pierda
/// recibir nombre nombre
/// refrescar pagina