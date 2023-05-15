import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistaRoutes } from './dentista';
import { PacienteRoutes } from './paciente';
import { ConsultaRoutes } from './consulta';
import { TipoConsultaRoutes } from './tipo-consulta';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/paciente/listar',
    pathMatch:'full'
  },

  ...DentistaRoutes,
  ...PacienteRoutes,
  ...ConsultaRoutes,
  ...TipoConsultaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
