import { Component, OnInit } from '@angular/core';
import { DentistaService,Dentista } from '../shared';

@Component({
  selector: 'app-listar-dentista',
  templateUrl: './listar-dentista.component.html',
  styleUrls: ['./listar-dentista.component.css']
})
export class ListarDentistaComponent implements OnInit{

  dentistas: Dentista[] = []

  constructor(private dentistaService: DentistaService) {}

  ngOnInit() {
  	this.dentistas = this.listarTodos(); 
    /*
    this.dentistas = [
      new Dentista(1,"Eduardo","1234",true),
      new Dentista(1,"João","4567",true)
    ]
    */
  }

  listarTodos(): Dentista[] {
  	return this.dentistaService.listarDentistas();
  }

  remover($event: any, tarefa: Dentista): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.dentistaService.removerDentista(tarefa.id);
      this.dentistas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Dentista): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.dentistaService.alterarSituacao(tarefa.id);
      this.dentistas = this.listarTodos();
    }
  }

}
