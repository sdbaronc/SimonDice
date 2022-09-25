import { niveles } from "./model/modelo.js";
import { vista } from "./view/vista.js";
import { partida } from "./controller/controlador.js";
const dumm = niveles.dummie;
const index = new partida(dumm, new vista());
