import { Dentista } from "src/app/dentista/shared";
import { Paciente } from "src/app/paciente/shared";
import { Tipo_consulta } from "src/app/tipo-consulta/shared";


export class Consulta{

    constructor(
        public id?:number,
        public tipo_consulta?:Tipo_consulta,
        public dentista?:Dentista,
        public paciente?:Paciente,
        public descricao?:string,
        public data?:string){}

}