import { Component, OnInit } from '@angular/core';
import { PacienteService,Paciente } from '../shared';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit{

  pacientes: Paciente[] = []

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
  	this.pacientes = this.listarTodos(); 
  }


  listarTodos(): Paciente[] {
  	return this.pacienteService.listarPacientes();
  }

  remover($event: any, tarefa: Paciente): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.pacienteService.removerPaciente(tarefa.id);
      this.pacientes = this.listarTodos();
    }
  }
}
