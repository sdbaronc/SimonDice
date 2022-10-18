import puntajes from "../db/dataBase.json";
import { Ipuntaje } from "interface/interfaces";
import fs from "fs";
import path from "path";

class BackendModel {
    constructor() {
        // TODO document why this constructor is empty
      }
      public getPuntajeByID = (id: number) => puntajes[--id];
      public getPuntajes = ()=> puntajes;

      public insertPuntaje = (puntaje: Ipuntaje): boolean => {
        console.log(path.join(__dirname, 'db'));
        let data = fs.readFileSync('dist/db/dataBase.json', 'utf8');
        let puntajeData: Ipuntaje[] = JSON.parse(data);
        puntajeData.push(puntaje);
        data = JSON.stringify(puntajeData);
        fs.writeFile('dist/db/people.json', data, (err) => {
            if (err) throw err;
            return false;
        });
        return true;
    }
    public updatePuntaje = (puntaje: Ipuntaje): boolean => {
        console.log('UPDATE');
        return true;
    }

    public deletePuntaje = (id: number): boolean => {
        console.log('DELETE');
        return true;
    }

}
export default BackendModel;