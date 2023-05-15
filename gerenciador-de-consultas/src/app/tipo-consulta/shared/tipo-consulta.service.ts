import { Injectable } from '@angular/core';
import { Tipo_consulta } from './tipo_consulta.model';

@Injectable({
  providedIn: 'root'
})
export class TipoConsultaService {

  constructor() { }

  listarTiposConsulta(): Tipo_consulta[] {
  	const tipos = localStorage['tipo_consultas'];
  	return tipos ? JSON.parse(tipos) : [];
  }

  cadastrarPaciente(tipo: Tipo_consulta): void {
  	const tipos = this.listarTiposConsulta();
  	tipo.id = new Date().getTime();
  	tipos.push(tipo);
  	localStorage['tipo_consultas'] = JSON.stringify(tipos);
  }

  buscarTipo_Consulta(tipo: string): Tipo_consulta {
    const pacientes: Tipo_consulta[] = this.listarTiposConsulta();
    return pacientes.find(paciente => paciente.tipo === tipo)!;
  }

  buscarTipo_ConsultaPorId(id: number): Tipo_consulta {
    const pacientes: Tipo_consulta[] = this.listarTiposConsulta();
    return pacientes.find(paciente => paciente.id == id)!;
  }

  atualizarCliente(tipo: Tipo_consulta): void {
    const tarefas: Tipo_consulta[] = this.listarTiposConsulta();
    tarefas.forEach((obj, index, objs) => { 
      if (tipo.id === obj.id) {
        objs[index] = tipo;
      }
    });
    localStorage['tipo_consultas'] = JSON.stringify(tarefas);
  }

  removerPaciente(id?: number): void {
    let tipo: Tipo_consulta[] = this.listarTiposConsulta();
    tipo = tipo.filter(tipo => tipo.id !== id);
    localStorage['tipo_consultas'] = JSON.stringify(tipo);
  }
}