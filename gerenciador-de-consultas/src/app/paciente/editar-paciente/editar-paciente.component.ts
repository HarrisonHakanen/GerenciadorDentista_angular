import { Component, ViewChild } from '@angular/core';
import { PacienteService, Paciente } from '../shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent {

  @ViewChild('formPaciente', { static: true }) formPaciente!: NgForm;
  paciente: Paciente = new Paciente();

  constructor(
    private pacienteService: PacienteService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
    const CPF = this.route.snapshot.params['CPF'];
    this.paciente = this.pacienteService.buscarPacientePorCPF(CPF);
  }

  atualizar(): void {
    if (this.formPaciente.form.valid) {
	    this.pacienteService.atualizarCliente(this.paciente);
	    this.router.navigate(['/paciente/listar']);
    }
  }

}
