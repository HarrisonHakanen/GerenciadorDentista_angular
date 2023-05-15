import { Injectable } from '@angular/core';
import { Consulta } from './consulta.model';
import { Paciente, PacienteService } from 'src/app/paciente/shared';
import { Dentista } from 'src/app/dentista/shared';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private pacienteService: PacienteService) { }

  consultasDoPaciente: Consulta[] = []
  consultasDoDentista: Dentista[] = []

  listarConsultas(): Consulta[] {
  	const consultas = localStorage['consultas'];
  	return consultas ? JSON.parse(consultas) : [];
  }

  cadastrar(consulta: Consulta): void {
  	const consultas = this.listarConsultas();
  	consulta.id = new Date().getTime();
  	consultas.push(consulta);
  	localStorage['consultas'] = JSON.stringify(consultas);
  }

  buscarConsultaPorId(id: number): Consulta {
    const consultas: Consulta[] = this.listarConsultas();
    return consultas.find(consulta => consulta.id === id)!;
  }

  atualizarConsulta(consulta: Consulta): void {
    const consultas: Consulta[] = this.listarConsultas();
    
    consultas.forEach((obj, index, objs) => { 
      if (consulta.id === obj.id) {
        objs[index] = consulta;
      }
    });
    localStorage['consultas'] = JSON.stringify(consultas);
  }

  removerConsulta(id?: number): void {
    let consulta: Consulta[] = this.listarConsultas();
    consulta = consulta.filter(consulta => consulta.id !== id);
    localStorage['consultas'] = JSON.stringify(consulta);
  }

  listarConsultasPeloPaciente(paciente_id:number):Consulta[]{
    this.consultasDoPaciente = []
    
    const consultas: Consulta[] = this.listarConsultas();

    consultas.forEach((obj) => { 
      if (paciente_id == obj.paciente?.id) {
        this.consultasDoPaciente.push(obj)
      }
    });
    
    return this.consultasDoPaciente;
  }

  listarConsultasPeloDentista(dentista_id:number):Consulta[]{
    this.consultasDoDentista = []
    
    const consultas: Consulta[] = this.listarConsultas();

    consultas.forEach((obj) => { 
      if (dentista_id == obj.dentista?.id) {
        this.consultasDoDentista.push(obj)
      }
    });
    
    return this.consultasDoDentista;
  }
}
