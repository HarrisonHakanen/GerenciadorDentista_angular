import {Routes} from '@angular/router';
import { ListarPacienteComponent } from './listar-paciente';
import { CadastrarPacienteComponent } from './cadastrar-paciente';
import { EditarPacienteComponent } from './editar-paciente';
import { PacienteConsultaComponent } from './paciente-consulta';

export const PacienteRoutes: Routes =[   
    
    {
        path:'paciente',
        redirectTo:'paciente/listar'
    },
    
    {
        path:'paciente/listar',
        component:ListarPacienteComponent
    },
    
    {
        path:'paciente/cadastrar',
        component:CadastrarPacienteComponent
    },
    
    {
        path:'paciente/editar/:CPF',
        component:EditarPacienteComponent
    },

    {
        path:'paciente/consultas/:id',
        component:PacienteConsultaComponent
    }
    
]