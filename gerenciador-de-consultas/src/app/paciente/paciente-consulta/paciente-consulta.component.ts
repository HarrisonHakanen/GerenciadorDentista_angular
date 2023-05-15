import { Component, OnInit } from '@angular/core';
import { Consulta, ConsultaService } from 'src/app/consulta/shared';
import { Paciente, PacienteService } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente-consulta',
  templateUrl: './paciente-consulta.component.html',
  styleUrls: ['./paciente-consulta.component.css']
})
export class PacienteConsultaComponent implements OnInit{

  paciente: Paciente = new Paciente()
  consultasDoPaciente: Consulta[] = []
  
  constructor(
    private pacienteService: PacienteService,
    private consultaService:ConsultaService,
    private route: ActivatedRoute) {
      this.consultasDoPaciente = []
    }

  ngOnInit() {
    this.consultasDoPaciente = []

    const id = this.route.snapshot.params['id'];

    this.paciente = this.pacienteService.buscarPacientePorId(id)

  	this.consultasDoPaciente = this.consultaService.listarConsultasPeloPaciente(id); 
  }
}
