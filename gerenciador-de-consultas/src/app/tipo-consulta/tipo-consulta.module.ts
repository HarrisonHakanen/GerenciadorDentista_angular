import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTipoConsultaComponent } from './listar-tipo-consulta';

import { TipoConsultaService } from './shared';
import { CadastrarTipoConsultaComponent } from './cadastrar-tipo-consulta';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarTipoConsultaComponent,
    CadastrarTipoConsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TipoConsultaService
  ]
})
export class TipoConsultaModule { }
