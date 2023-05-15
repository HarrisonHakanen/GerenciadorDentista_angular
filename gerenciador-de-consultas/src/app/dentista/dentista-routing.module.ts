import {Routes} from '@angular/router';
import { ListarDentistaComponent } from './listar-dentista';
import { CadastrarDentistaComponent } from './cadastrar-dentista';
import { AlterarDentistaComponent } from './alterar-dentista';
import { DentistaConsultaComponent } from './dentista-consulta';

export const DentistaRoutes: Routes =[   
    
    {
        path:'dentista',
        redirectTo:'dentista/listar'
    },
    
    {
        path:'dentista/listar',
        component:ListarDentistaComponent
    },
    
    {
        path:'dentista/cadastrar',
        component:CadastrarDentistaComponent
    },
    
    {
        path:'dentista/editar/:id',
        component:AlterarDentistaComponent
    },
    {
        path:'dentista/consultas/:id',
        component:DentistaConsultaComponent
    }
    
]