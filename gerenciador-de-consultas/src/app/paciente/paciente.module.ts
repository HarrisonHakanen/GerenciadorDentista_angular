import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPacienteComponent } from './cadastrar-paciente';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListarPacienteComponent } from './listar-paciente';
import { EditarPacienteComponent } from './editar-paciente';
import { PacienteService } from './shared';
import { PacienteConsultaComponent } from './paciente-consulta';




@NgModule({
  declarations: [
    CadastrarPacienteComponent,
    ListarPacienteComponent,
    EditarPacienteComponent,
    PacienteConsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    PacienteService
  ]
})
export class PacienteModule { }
