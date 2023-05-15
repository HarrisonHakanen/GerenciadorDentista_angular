import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarConsultaComponent } from './listar-consulta';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlterarConsultaComponent } from './alterar-consulta/alterar-consulta.component';
import { CadastrarConsultaComponent } from './cadastrar-consulta';



@NgModule({
  declarations: [
    ListarConsultaComponent,
    AlterarConsultaComponent,
    CadastrarConsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ConsultaModule { }
