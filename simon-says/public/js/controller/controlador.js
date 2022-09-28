export class controladorPartida {
    constructor(partida1, vista1) {
        this.partida1 = partida1;
        this.vista1 = vista1;
        this.vista1.obtenerBoton();
        this.asignaLevel();
        this.vista1.addToDisplay(this.partida1.GetNivel.toString());
    }
    determinarNivel() {
        console.log(this.vista1.GetNivel);
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
    }
}
