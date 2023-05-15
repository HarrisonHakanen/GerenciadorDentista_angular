import {Routes} from '@angular/router';
import { ListarTipoConsultaComponent } from './listar-tipo-consulta';
import { CadastrarTipoConsultaComponent } from './cadastrar-tipo-consulta';
//import { CadastrarPacienteComponent } from './cadastrar-paciente';
//import { EditarPacienteComponent } from './editar-paciente';

export const TipoConsultaRoutes: Routes =[   
   
    {
        path:'tipo_consulta',
        redirectTo:'tipo_consulta/listar'
    },
    
    {
        path:'tipo_consulta/listar',
        component:ListarTipoConsultaComponent
    },
    
    {
        path:'tipo_consulta/cadastrar',
        component:CadastrarTipoConsultaComponent
    },
    /*
    {
        path:'paciente/editar/:id',
        component:EditarPacienteComponent
    }
    */
    
]