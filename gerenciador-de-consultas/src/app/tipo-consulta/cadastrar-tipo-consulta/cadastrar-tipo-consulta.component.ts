import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { TipoConsultaService,Tipo_consulta } from '../shared';

@Component({
  selector: 'app-cadastrar-tipo-consulta',
  templateUrl: './cadastrar-tipo-consulta.component.html',
  styleUrls: ['./cadastrar-tipo-consulta.component.css']
})
export class CadastrarTipoConsultaComponent implements OnInit{

  @ViewChild('formTipoConsulta', { static: true }) formTipoConsulta!: NgForm;

  tipoConsulta: Tipo_consulta = new Tipo_consulta();

  constructor(
    private tipoConsultaService: TipoConsultaService,
  	private router: Router) { }

  ngOnInit() {
    this.tipoConsulta = new Tipo_consulta();
  }

  cadastrarTipoConsulta(): void {
    if (this.formTipoConsulta.form.valid) {
  	  this.tipoConsultaService.cadastrarPaciente(this.tipoConsulta);
  	  this.router.navigate(['/tipo_consulta/listar']);
    }
  }  

}
