import { puntajeTop } from "../model/modelo.js";
export class controladorPartida {
    constructor(partida1, vista1) {
        this.partida1 = partida1;
        this.vista1 = vista1;
        this.ativarInicio();
        this.obtenerNivel();
        this.s0 = document.getElementById("s0");
        this.s1 = document.getElementById("s1");
        this.s2 = document.getElementById("s2");
        this.s3 = document.getElementById("s3");
        this.ers = document.getElementById("ere");
        this.con = 0;
        this.pos = -1;
    }
    determinarNivel() {
        let nivel;
        if (this.vista1.GetNivel == "Dummie") {
            nivel = 1000;
        }
        else if (this.vista1.GetNivel == "Junior") {
            nivel = 900;
        }
        else if (this.vista1.GetNivel == "Senior") {
            nivel = 800;
        }
        else {
            nivel = 10;
        }
        return nivel;
    }
    asignaLevel() {
        this.partida1.SetNivel(this.determinarNivel());
        this.vista1.addToDisplay("Eres un gugador :   " + this.vista1.GetNivel);
    }
    obtenerNivel() {
        this.vista1.GetBotond.addEventListener("click", () => {
            this.obtenerContenido(this.vista1.GetBotond);
        });
        this.vista1.GetBotonj.addEventListener("click", () => { this.obtenerContenido(this.vista1.GetBotonj); });
        this.vista1.GetBotons.addEventListener("click", () => { this.obtenerContenido(this.vista1.GetBotons); });
    }
    obtenerContenido(elemento) {
        this.vista1.SetNivel(elemento.textContent);
        //console.log(this.vista1.GetNivel);
        this.asignaLevel();
    }
    ativarInicio() {
        this.vista1.GetBotonI.addEventListener("click", () => {
            //console.log(this.partida1.GetNivel)
            if (this.partida1.GetNivel == -1) {
                this.vista1.addToDisplay("Debe seleccionar un nivel");
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
        });
        this.recibeSeq();
    }
    calSecuencia() {
        ///genera una nueva secuencia
        let n = this.partida1.GetSecuencia.length + 1;
        this.partida1.vaciarSeq();
        for (let i = 0; i < n; i++) {
            let npaso = Math.floor(Math.random() * 4);
            this.partida1.GetSecuencia.push(npaso);
        }
        //console.log(this.partida1.GetSecuencia)
    }
    mostrarSecuencia() {
        let conut = 0;
        let inter = setInterval(() => {
            this.mostrarPaso(this.partida1.GetSecuencia[conut]);
            if (conut == this.partida1.GetSecuencia.length) {
                clearInterval(inter);
            }
            conut = conut + 1;
        }, this.partida1.GetNivel);
    }
    mostrarPaso(paso) {
        ///segun el numero selecciona un boton para mostrar un paso con un sonido
        switch (paso) {
            case 0: {
                this.s0.play();
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
    validarPaso(boton, paso) {
        let vb = false;
        if (boton.textContent == "G" && paso == 0) {
            vb = true;
        }
        else if (boton.textContent == "R" && paso == 1) {
            vb = true;
        }
        else if (boton.textContent == "Y" && paso == 2) {
            vb = true;
        }
        else if (boton.textContent == "B" && paso == 3) {
            vb = true;
        }
        return vb;
    }
    recibeSeq() {
        this.vista1.GetBotonG.addEventListener("click", () => {
            this.s0.play();
            this.vista1.GetBotonG.style.background = "rgb(0, 255, 0)";
            setTimeout(() => {
                this.vista1.GetBotonG.style.background = "rgb(100, 190, 100)";
            }, 150);
            if (!this.validarPaso(this.vista1.GetBotonG, this.partida1.GetSecuencia[this.con])) {
                this.partida1.modiEstado(false);
                this.vista1.modalCreate(this.validarTop());
                this.registrar();
            }
            else {
                this.con++;
                if (this.con == this.partida1.GetSecuencia.length) {
                    this.vista1.GetBotonI.style.display = "block";
                    this.con = 0;
                }
            }
        });
        this.vista1.GetBotonR.addEventListener("click", () => {
            this.s1.play();
            this.vista1.GetBotonR.style.background = "rgb(255, 0, 0)";
            setTimeout(() => {
                this.vista1.GetBotonR.style.background = "rgb(188, 100, 90)";
            }, 150);
            if (!this.validarPaso(this.vista1.GetBotonR, this.partida1.GetSecuencia[this.con])) {
                this.partida1.modiEstado(false);
                this.vista1.modalCreate(this.validarTop());
                this.registrar();
            }
            else {
                this.con++;
                if (this.con == this.partida1.GetSecuencia.length) {
                    this.vista1.GetBotonI.style.display = "block";
                    this.con = 0;
                }
            }
        });
        this.vista1.GetBotonY.addEventListener("click", () => {
            this.s2.play();
            this.vista1.GetBotonY.style.background = "rgb(255, 255, 0)";
            setTimeout(() => {
                this.vista1.GetBotonY.style.background = "rgb(190, 190, 70)";
            }, 150);
            if (!this.validarPaso(this.vista1.GetBotonY, this.partida1.GetSecuencia[this.con])) {
                this.partida1.modiEstado(false);
                this.vista1.modalCreate(this.validarTop());
                this.registrar();
            }
            else {
                this.con++;
                if (this.con == this.partida1.GetSecuencia.length) {
                    this.vista1.GetBotonI.style.display = "block";
                    this.con = 0;
                }
            }
        });
        this.vista1.GetBotonB.addEventListener("click", () => {
            this.s3.play();
            this.vista1.GetBotonB.style.background = "rgb(0, 0, 255)";
            setTimeout(() => {
                this.vista1.GetBotonB.style.background = "rgb(37, 37, 100)";
            }, 150);
            if (!this.validarPaso(this.vista1.GetBotonB, this.partida1.GetSecuencia[this.con])) {
                this.partida1.modiEstado(false);
                this.vista1.modalCreate(this.validarTop());
                this.registrar();
            }
            else {
                this.con++;
                if (this.con == this.partida1.GetSecuencia.length) {
                    this.vista1.GetBotonI.style.display = "block";
                    this.con = 0;
                }
            }
        });
        //this.calSecuencia();
        //this.mostrarSecuencia();
    }
    guardarlocal(top, posi) {
        //localStorage.clear();
        localStorage.setItem(posi.toString(), JSON.stringify(top));
    }
    registrar() {
        let nombre = this.vista1.GetInNam;
        this.vista1.GetBotonReg.addEventListener("click", () => {
            let top1 = new puntajeTop(nombre.value, this.vista1.GetNivel, this.partida1.GetSecuencia.length);
            this.guardarlocal(top1, this.pos);
            location.reload();
        });
    }
    validarTop() {
        let reto = false;
        let menor = 2000;
        let item = -1;
        for (let i = 0; i < localStorage.length; i++) {
            let fila = JSON.parse(localStorage.getItem(i.toString()));
            let puntajes = fila.puntaje;
            if (puntajes <= menor) {
                menor = puntajes;
                item = i;
            }
        }
        if (this.partida1.GetSecuencia.length >= menor) {
            localStorage.removeItem(item.toString());
            reto = true;
        }
        this.pos = item;
        console.log(item);
        return reto;
    }
}
