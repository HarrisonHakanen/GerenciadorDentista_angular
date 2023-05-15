import { Injectable } from '@angular/core';
import { Dentista } from './dentista-model';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {

  constructor() { }

  listarDentistas(): Dentista[] {
  	const dentistas = localStorage['dentistas'];
  	return dentistas ? JSON.parse(dentistas) : [];
  }

  cadastrar(dentista: Dentista): void {
  	const dentistas = this.listarDentistas();
  	dentista.id = new Date().getTime();
  	dentistas.push(dentista);
  	localStorage['dentistas'] = JSON.stringify(dentistas);
  }

  buscarDentistaPorId(id: number): Dentista {
    const dentistas: Dentista[] = this.listarDentistas();
    return dentistas.find(dentista => dentista.id == id)!;
  }

  atualizarDentista(dentista: Dentista): void {
    const tarefas: Dentista[] = this.listarDentistas();
    tarefas.forEach((obj, index, objs) => { 
      if (dentista.id === obj.id) {
        objs[index] = dentista;
      }
    });
    localStorage['dentistas'] = JSON.stringify(tarefas);
  }

  removerDentista(id?: number): void {
    let dentista: Dentista[] = this.listarDentistas();
    dentista = dentista.filter(dentista => dentista.id !== id);
    localStorage['dentistas'] = JSON.stringify(dentista);
  }

  alterarSituacao(id?: number): void {
    const dentistas: Dentista[] = this.listarDentistas();
    dentistas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].situacao = !obj.situacao;
      }
    });
    localStorage['dentistas'] = JSON.stringify(dentistas);
  }
}