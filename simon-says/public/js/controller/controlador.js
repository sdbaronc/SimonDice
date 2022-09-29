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
                this.calSecuencia();
                this.mostrarSecuencia();
                this.recibeSeq();
                this.vista1.GetBotonI.style.display = "block";
            }
            //mientras la partidasté true
            //cacleq
            //muestreseq
            //reciba seq
        });
    }
    calSecuencia() {
        ///genera una nueva secuencia
        let n = this.partida1.GetSecuencia.length + 1;
        console.log(n);
        let vacia = [];
        this.partida1.vaciarSeq();
        for (let i = 0; i < n; i++) {
            let npaso = Math.floor(Math.random() * 4);
            this.partida1.GetSecuencia.push(npaso);
        }
        console.log(this.partida1.GetSecuencia);
    }
    mostrarSecuencia() {
        this.vista1.GetBotonI.style.display = "none";
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
        this.partida1.GetSecuencia.forEach(paso => {
            this.vista1.GetBotonG.addEventListener("click", () => {
                this.s0.play();
                if (!this.validarPaso(this.vista1.GetBotonG, paso)) {
                    this.partida1.modiEstado(false);
                }
            });
            this.vista1.GetBotonR.addEventListener("click", () => {
                this.s1.play();
                if (!this.validarPaso(this.vista1.GetBotonR, paso)) {
                    this.partida1.modiEstado(false);
                }
            });
            this.vista1.GetBotonY.addEventListener("click", () => {
                this.s2.play();
                if (!this.validarPaso(this.vista1.GetBotonY, paso)) {
                    this.partida1.modiEstado(false);
                }
            });
            this.vista1.GetBotonB.addEventListener("click", () => {
                this.s3.play();
                if (!this.validarPaso(this.vista1.GetBotonB, paso)) {
                    this.partida1.modiEstado(false);
                }
            });
        });
    }
}
