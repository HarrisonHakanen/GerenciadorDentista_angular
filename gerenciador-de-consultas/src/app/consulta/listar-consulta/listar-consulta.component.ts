import { Component, OnInit } from '@angular/core';
import { ConsultaService,Consulta } from '../shared';
import { Tipo_consulta } from 'src/app/tipo-consulta/shared';
import { Dentista } from 'src/app/dentista/shared';
import { Paciente } from 'src/app/paciente/shared';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit{

  consultas: Consulta[] = []

  constructor(private consultaService: ConsultaService) {}

  ngOnInit() {
  	this.consultas = this.listarTodos(); 
    /*
    this.consultas = [
      new Consulta(1,new Tipo_consulta(1,"teste"),new Dentista(1,"Pedro","1234",true),new Paciente(1,"Juca","Masculino","21/02/1997","0000","14879")),
      
    ]
    */
  }

  listarTodos(): Consulta[] {
  	return this.consultaService.listarConsultas();
  }

  remover($event: any, consulta: Consulta): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + consulta.id + '"?')) {
      this.consultaService.removerConsulta(consulta.id);
      this.consultas = this.listarTodos();
    }
  }

  
}
