import { Ciclo } from "./ciclo.model"
import { Usuario } from "./usuario.model"

export class Disponibilidad {
    idDisponibilidad?:number;
    horaInicio?:string;
    horaFin?:string;
    dia?:string;
    ciclo?:Ciclo;
    usuario?:Usuario
}
