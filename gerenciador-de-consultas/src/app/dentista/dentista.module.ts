import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListarDentistaComponent } from './listar-dentista';
import { Dentista,DentistaService } from './shared';
import { CadastrarDentistaComponent } from './cadastrar-dentista';
import { AlterarDentistaComponent } from './alterar-dentista';
import { DentistaConsultaComponent } from './dentista-consulta/dentista-consulta.component';



@NgModule({
  declarations: [
    ListarDentistaComponent,
    CadastrarDentistaComponent,
    AlterarDentistaComponent,
    DentistaConsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    DentistaService
  ]
})
export class DentistaModule { }
