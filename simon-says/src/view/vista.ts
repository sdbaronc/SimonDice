
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
    private modal: any;
    private nom:any;
    private botonReg:any
    private botonRefres: any
    private tabla :any

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
        this.modal=this.getElement('.modal');
        this.nom=this.getElement('#userN');
        this.botonReg=this.getElement('#btnRegistro');
        this.botonRefres=this.getElement('#btnreload');
        this.tabla=this.getElement('.puntos');
        this.refrescar();
        this.mostrarPuntajes();
        
        
        
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
    public set SetBotonReg (botons: HTMLElement) {
        this.botonReg = botons;
    }

    public get GetBotonReg() {
        return this.botonReg;
    }
    public set SetInNam (botons: HTMLElement) {
        this.nom = botons;
    }

    public get GetInNam() {
        return this.nom;
    }






    public addToDisplay(content: string): void {
        this.display.innerHTML = '<p>'+content+'</p>'
    }
    public modalCreate(clasif:boolean){
        if(clasif){
            
            this.modal.classList.add('modal--show')
        }
        else{
            this.modal.innerHTML = '<div class="clmodal text-center" ><h1>Lo sentimos No Clasificaste Top 10</h1><button id="btnreload">Jugar de nuevo</button></div>';
            
            this.modal.classList.add('modal--show')
        }


        

    }
    public refrescar(){
        this.botonRefres.addEventListener("click",()=>{
            location.reload();
        })

    }
    public mostrarPuntajes(){
        this.tabla.innerHTML +=' <p>Nombre</p> <p>Nivel</p> <p>puntaje</p>'
        
        
                
        for(let i : number=0;i<localStorage.length;i++){
            
            
            let fila: any= JSON.parse(localStorage.getItem(i.toString())!)
            let nombre:string = fila.nombre;
            let nivel : string= fila.nivel;
            let puntajes: number= fila.puntaje
            this.tabla.innerHTML +=' <p>'+ nombre+'</p> <p>'+nivel+'</p> <p>'+puntajes+'</p>';
            
            
        }
        
        
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