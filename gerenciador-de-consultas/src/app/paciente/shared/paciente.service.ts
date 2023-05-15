import { Injectable } from '@angular/core';
import { Paciente } from './paciente-model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor() { }

  listarPacientes(): Paciente[] {
  	const pacientes = localStorage['pacientes'];
  	return pacientes ? JSON.parse(pacientes) : [];
  }

  cadastrarPaciente(paciente: Paciente): void {
  	const pacientes = this.listarPacientes();
  	paciente.id = new Date().getTime();
  	pacientes.push(paciente);
  	localStorage['pacientes'] = JSON.stringify(pacientes);
  }

  buscarPacientePorCPF(CPF: string): Paciente {
    const pacientes: Paciente[] = this.listarPacientes();
    return pacientes.find(paciente => paciente.CPF == CPF)!;
  }

  buscarPacientePorId(Id: number): Paciente {
    const pacientes: Paciente[] = this.listarPacientes();
    return pacientes.find(paciente => paciente.id == Id)!;
  }

  atualizarCliente(paciente: Paciente): void {
    const tarefas: Paciente[] = this.listarPacientes();
    tarefas.forEach((obj, index, objs) => { 
      if (paciente.id === obj.id) {
        objs[index] = paciente;
      }
    });
    localStorage['pacientes'] = JSON.stringify(tarefas);
  }

  removerPaciente(id?: number): void {
    let paciente: Paciente[] = this.listarPacientes();
    paciente = paciente.filter(paciente => paciente.id !== id);
    localStorage['pacientes'] = JSON.stringify(paciente);
  }

}
