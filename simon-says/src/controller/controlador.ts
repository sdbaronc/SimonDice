
import { vista } from "../view/vista.js";
import { partida } from "../model/modelo.js";


export class controladorPartida {
    private partida1: partida;
    private vista1: vista;
    private s0: HTMLAudioElement;
    private s1: HTMLAudioElement;
    private s2: HTMLAudioElement;
    private s3: HTMLAudioElement;
    private ers: HTMLAudioElement;
    private con: number;


    constructor(partida1: partida, vista1: vista) {

        this.partida1 = partida1;
        this.vista1 = vista1;
        this.ativarInicio();
        this.obtenerNivel();
        this.s0 = document.getElementById("s0") as HTMLAudioElement;
        this.s1 = document.getElementById("s1") as HTMLAudioElement;
        this.s2 = document.getElementById("s2") as HTMLAudioElement;
        this.s3 = document.getElementById("s3") as HTMLAudioElement;
        this.ers = document.getElementById("ere") as HTMLAudioElement;
        this.con = 0;
        




    }
    public determinarNivel(): number {


        let nivel: number;
        if (this.vista1.GetNivel == "Dummie") {
            nivel = 1000;
        } else if (this.vista1.GetNivel == "Junior") {
            nivel = 900;
        } else if (this.vista1.GetNivel == "Senior") {
            nivel = 800;
        }
        else {
            nivel = 10;
        }
        return nivel;
    }

    public asignaLevel(): void {

        this.partida1.SetNivel(this.determinarNivel());
        this.vista1.addToDisplay("Eres un gugador :   " + this.vista1.GetNivel);


    }
    public obtenerNivel() {
        this.vista1.GetBotond.addEventListener("click", () => {
            this.obtenerContenido(this.vista1.GetBotond)

        });
        this.vista1.GetBotonj.addEventListener("click", () => { this.obtenerContenido(this.vista1.GetBotonj) });
        this.vista1.GetBotons.addEventListener("click", () => { this.obtenerContenido(this.vista1.GetBotons) });
    }
    public obtenerContenido(elemento: HTMLElement) {
        this.vista1.SetNivel(elemento.textContent!);
        //console.log(this.vista1.GetNivel);
        this.asignaLevel();

    }
    public ativarInicio() {
        
        this.vista1.GetBotonI.addEventListener("click", () => {
            //console.log(this.partida1.GetNivel)
            if (this.partida1.GetNivel == -1) {
                this.vista1.addToDisplay("Debe seleccionar un nivel")
            }
            else {
                this.vista1.addToDisplay("iniciaste la partida en nivel : ");
                this.vista1.GetBotonI.style.display = "none";
                this.calSecuencia();
                this.mostrarSecuencia();
                
                
                

            }

            //mientras la partidasté true

            //cacle
            //muestreseq
            //reciba seq



        })
        this.recibeSeq();
        
        
    }
    public calSecuencia() {
        ///genera una nueva secuencia
        let n: number = this.partida1.GetSecuencia.length + 1;
        console.log(n)
        
        this.partida1.vaciarSeq();
        
        for (let i: number = 0; i < n; i++) {
            let npaso: number = Math.floor(Math.random() * 4);
            this.partida1.GetSecuencia.push(npaso);

        }
        //console.log(this.partida1.GetSecuencia)


    }
    public mostrarSecuencia() {

        let conut: number = 0;



        let inter = setInterval(() => {

            this.mostrarPaso(this.partida1.GetSecuencia[conut])
            if (conut == this.partida1.GetSecuencia.length) {
                clearInterval(inter);


            }
            conut = conut + 1;



        }, this.partida1.GetNivel)






    }
    public mostrarPaso(paso: number) {
        ///segun el numero selecciona un boton para mostrar un paso con un sonido
        switch (paso) {
            case 0: {
                this.s0.play()

                this.vista1.GetBotonG.style.background = "rgb(0, 255, 0)";


                setTimeout(() => {
                    this.vista1.GetBotonG.style.background = "rgb(100, 190, 100)";
                }, 150);




                break;
            }
            case 1: {
                this.s1.play();

                this.vista1.GetBotonR.style.background = "rgb(255, 0, 0)";

                setTimeout(() => {

                    this.vista1.GetBotonR.style.background = "rgb(188, 100, 90)";
                }, 150);




                break;
            }
            case 2: {
                this.s2.play();

                this.vista1.GetBotonY.style.background = "rgb(255, 255, 0)";

                setTimeout(() => {

                    this.vista1.GetBotonY.style.background = "rgb(190, 190, 70)";
                }, 150);




                break;
            }
            case 3: {
                this.s3.play();

                this.vista1.GetBotonB.style.background = "rgb(0, 0, 255)";

                setTimeout(() => {

                    this.vista1.GetBotonB.style.background = "rgb(37, 37, 100)";
                }, 150);




                break;
            }
        }
    }
    public validarPaso(boton: HTMLElement, paso: number): boolean {
        let vb: boolean = false;
        if (boton.textContent == "G" && paso == 0) {
            vb = true
        }
        else if (boton.textContent == "R" && paso == 1) {
            vb = true
        }
        else if (boton.textContent == "Y" && paso == 2) {
            vb = true
        }
        else if (boton.textContent == "B" && paso == 3) {
            vb = true
        }
        return vb;

    }
    public recibeSeq() {
        console.log(this.partida1.GetSecuencia)
        
            this.vista1.GetBotonG.addEventListener("click", () => {
                this.s0.play();
                console.log(this.partida1.GetEstado)
                if (!this.validarPaso(this.vista1.GetBotonG, this.partida1.GetSecuencia[this.con])) {

                    this.partida1.modiEstado(false);
                    console.log(this.partida1.GetEstado)
                } else {
                    
                    this.con++;
                    if (this.con == this.partida1.GetSecuencia.length) {
                        this.vista1.GetBotonI.style.display = "block";
                        this.con=0;


                    }
                    console.log(this.partida1.GetEstado)


                }

            });

            this.vista1.GetBotonR.addEventListener("click", () => {
                this.s1.play();
                console.log(this.partida1.GetEstado)
                if (!this.validarPaso(this.vista1.GetBotonR, this.partida1.GetSecuencia[this.con])) {

                    this.partida1.modiEstado(false);
                    console.log(this.partida1.GetEstado)

                } else {
                    this.con++;
                    if (this.con == this.partida1.GetSecuencia.length) {
                        this.vista1.GetBotonI.style.display = "block";
                        this.con=0;

                    }
                    console.log(this.partida1.GetEstado)
                }


            });
            this.vista1.GetBotonY.addEventListener("click", () => {
                this.s2.play();
                console.log(this.partida1.GetEstado)
                if (!this.validarPaso(this.vista1.GetBotonY, this.partida1.GetSecuencia[this.con])) {
                    this.partida1.modiEstado(false);
                    console.log(this.partida1.GetEstado)

                } else {
                    
                    this.con++;
                    if (this.con == this.partida1.GetSecuencia.length) {
                        this.vista1.GetBotonI.style.display = "block";
                        this.con=0;

                    }
                    console.log(this.partida1.GetEstado)

                }

            });
            this.vista1.GetBotonB.addEventListener("click", () => {
                this.s3.play();
                console.log(this.partida1.GetEstado)
                if (!this.validarPaso(this.vista1.GetBotonB, this.partida1.GetSecuencia[this.con])) {
                    this.partida1.modiEstado(false);
                    console.log(this.partida1.GetEstado)

                } else {
                    this.con++;
                    if (this.con == this.partida1.GetSecuencia.length) {
                        this.vista1.GetBotonI.style.display = "block";
                        this.con=0;

                    }
                    console.log(this.partida1.GetEstado)

                }

            





        });
        //this.calSecuencia();
        //this.mostrarSecuencia();


    }







    // 2 iniciar juego-







}


