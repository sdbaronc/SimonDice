
import { partida } from "./model/modelo.js";
import { vista } from "./view/vista.js";
import { controladorPartida } from "./controller/controlador.js";
const page = new controladorPartida(new partida, new vista);



    

