import { Component , OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { ConsultaService,Consulta } from '../shared';
import { PacienteService, Paciente } from 'src/app/paciente/shared';
import { DentistaService, Dentista } from 'src/app/dentista/shared';
import { TipoConsultaService, Tipo_consulta } from 'src/app/tipo-consulta/shared';


@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css']
})
export class CadastrarConsultaComponent implements OnInit{

  @ViewChild('formConsulta', { static: true }) formConsulta!: NgForm;

  
  consulta: Consulta = new Consulta();
  dentistas: Dentista[] = []
  pacientes: Paciente[] = []
  tipo_consultas: Tipo_consulta[] = []


  dentistaId:number = 0;
  pacienteId:number = 0;
  tipo_consultaId:number = 0;

  dentistaSeleciondo: Dentista = new Dentista();

  constructor(
    private consultaService: ConsultaService,
    private dentistaService: DentistaService,
    private pacienteService: PacienteService,
    private tipoConsultaService: TipoConsultaService,
  	private router: Router) { }


  ngOnInit() {
    this.dentistas = this.dentistaService.listarDentistas()
    this.pacientes = this.pacienteService.listarPacientes()
    this.tipo_consultas = this.tipoConsultaService.listarTiposConsulta()
  }
  

  cadastrarConsulta(): void {
    if (this.formConsulta.form.valid) {
      
      this.consulta.data = new Date().toString()
      this.dentistaSeleciondo = this.dentistaService.buscarDentistaPorId(this.dentistaId);

      this.consulta.dentista = this.dentistaService.buscarDentistaPorId(this.dentistaId);
      this.consulta.paciente = this.pacienteService.buscarPacientePorId(this.pacienteId);
      this.consulta.tipo_consulta = this.tipoConsultaService.buscarTipo_ConsultaPorId(this.tipo_consultaId)


  	  this.consultaService.cadastrar(this.consulta);
  	  this.router.navigate(['/consulta/listar']);
    }
  }

}
