import { Component, OnInit } from '@angular/core';
import { TipoConsultaService,Tipo_consulta } from '../shared';

@Component({
  selector: 'app-listar-tipo-consulta',
  templateUrl: './listar-tipo-consulta.component.html',
  styleUrls: ['./listar-tipo-consulta.component.css']
})
export class ListarTipoConsultaComponent implements OnInit{

  tipo_consultas: Tipo_consulta[] = []

  constructor(private tipo_consultaService: TipoConsultaService) {}

  ngOnInit() {
  	this.tipo_consultas = this.listarTodos(); 
    /*
    this.tipo_consultas = [
      new Tipo_consulta(1,"Retorno"),
      new Tipo_consulta(3,"Primeira consulta"),
      new Tipo_consulta(4,"Dúvida"),
      new Tipo_consulta(5,"Problema"),
    ]
    */
  }

  listarTodos(): Tipo_consulta[] {
  	return this.tipo_consultaService.listarTiposConsulta();
  }


  remover($event: any, tipo_consulta: Tipo_consulta): void {
    $event.preventDefault();
    if (confirm('Deseja remover o tipo de consulta "' + tipo_consulta.tipo + '"?')) {
      this.tipo_consultaService.removerPaciente(tipo_consulta.id);
      this.tipo_consultas = this.listarTodos();
    }
  }
}
