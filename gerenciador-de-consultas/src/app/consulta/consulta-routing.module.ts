import {Routes} from '@angular/router';
import { ListarConsultaComponent } from './listar-consulta';
import { CadastrarConsultaComponent } from './cadastrar-consulta';
//import { ListarDentistaComponent } from './listar-dentista';
//import { CadastrarDentistaComponent } from './cadastrar-dentista';

export const ConsultaRoutes: Routes =[   
    
    {
        path:'consulta',
        redirectTo:'consulta/listar'
    },
    
    {
        path:'consulta/listar',
        component:ListarConsultaComponent
    },
    
    {
        path:'consulta/cadastrar',
        component:CadastrarConsultaComponent
    },
    /*
    {
        path:'consulta/editar/:id',
        component:EditarDentistaComponent
    }
    */
]