export class controladorPartida {
    constructor(partida1, vista1) {
        this.partida1 = partida1;
        this.vista1 = vista1;
        this.ativarInicio();
        this.obtenerNivel();
    }
    determinarNivel() {
        let nivel;
        if (this.vista1.GetNivel == "Dummie") {
            nivel = 100;
        }
        else if (this.vista1.GetNivel == "Junior") {
            nivel = 90;
        }
        else if (this.vista1.GetNivel == "Senior") {
            nivel = 80;
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
        console.log(this.vista1.GetNivel);
        this.asignaLevel();
    }
    ativarInicio() {
        this.vista1.GetBotonI.addEventListener("click", () => {
            console.log(this.partida1.GetNivel);
            if (this.partida1.GetNivel == -1) {
                this.vista1.addToDisplay("Debe seleccionar un nivel");
            }
            else {
                this.vista1.addToDisplay("iniciaste la partida en nivel : ");
                this.calSecuencia;
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
        let vacia = [];
        this.partida1.SetSecuencia(vacia);
        for (let i = 0; i <= n; i++) {
            let npaso = Math.random() * 3;
            this.partida1.GetSecuencia.push(npaso);
        }
    }
    mostrarSecuencia() {
        ///recorre la secuencia y muestracadapaso()
    }
    mostrarPaso(paso) {
        ///segun el numero selecciona un boton para mostrar un paso con un sonido
    }
}
