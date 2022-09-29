
export class vista{
    private display: any;
    private botond: any;
    private botonj: any;
    private botons: any;
    private nivelN: string
    private botonI: any;
    private botonG: any;
    private botonR: any;
    private botonY: any;
    private botonB: any;

    constructor() {        
        this.display = this.getElement('.display');
        this.botond=this.getElement('#dummie')
        this.botonj=this.getElement('#junior')
        this.botons=this.getElement('#senior')
        this.nivelN="sn"
        this.botonI=this.getElement('.btn');
        this.botonG=this.getElement('#g');
        this.botonR=this.getElement('#r');
        this.botonY=this.getElement('#y');
        this.botonB=this.getElement('#b');
        
        
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);
    

    public set SetDisplay(dispaly: HTMLElement) {
        this.display = dispaly;
    }

    public get dispaly() {
        return this.display;
    }

    public set SetBotond (botond: HTMLElement) {
        this.botond = botond;
    }

    public get GetBotond() {
        return this.botond;
    }
    public set SetBotonj (botonj: HTMLElement) {
        this.botonj = botonj;
    }

    public get GetBotonj() {
        return this.botonj;
    }
    public set SetBotons (botons: HTMLElement) {
        this.botons = botons;
    }

    public get GetBotons() {
        return this.botons;
    }
   
    public set SetBotonI (botonS: HTMLElement) {
        this.botonI = botonS;
    }

    public get GetBotonI() {
        return this.botonI;
    }

    public  SetNivel (niveln: string) {
        this.nivelN = niveln;
    }

    public get GetNivel() {
        return this.nivelN;
    }
    public set SetBotonG (botons: HTMLElement) {
        this.botonG = botons;
    }

    public get GetBotonG() {
        return this.botonG;
    }
    public set SetBotonR (botons: HTMLElement) {
        this.botonR = botons;
    }

    public get GetBotonR() {
        return this.botonR;
    }
    public set SetBotonY (botons: HTMLElement) {
        this.botonY = botons;
    }

    public get GetBotonY() {
        return this.botonY;
    }
    public set SetBotonB (botons: HTMLElement) {
        this.botonB = botons;
    }

    public get GetBotonB() {
        return this.botonB;
    }






    public addToDisplay(content: string): void {
        this.display.innerHTML = '<p>'+content+'</p>'
    }
    
    /*public SelectNivel(nivel:HTMLElement):void{
        
        nivel.addEventListener('click',()=>{
            
            this.nivelN=nivel.textContent!;
            this.botonN=nivel;
        });
      
       
    }*/
   
   
}

/// 1cargar niveles
/// 2cargar lista top
/// 3recibir nivel 
/// 4mostrar secuencia


/// 5 repetir 4 hasta que juagdor pierda
/// recibir nombre nombre
/// refrescar pagina