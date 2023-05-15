import { Component, OnInit } from '@angular/core';
import { Dentista, DentistaService } from '../shared';
import { Consulta, ConsultaService } from 'src/app/consulta/shared';
import { PacienteService } from 'src/app/paciente/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dentista-consulta',
  templateUrl: './dentista-consulta.component.html',
  styleUrls: ['./dentista-consulta.component.css']
})
export class DentistaConsultaComponent implements OnInit{

  dentista: Dentista = new Dentista()
  consultasDoDentista: Consulta[] = []

  constructor(
    private dentistaService: DentistaService,
    private consultaService:ConsultaService,
    private route: ActivatedRoute) 
    {
      this.consultasDoDentista = []
    }

    ngOnInit() {

      this.consultasDoDentista = []

      const id = this.route.snapshot.params['id'];

      this.dentista = this.dentistaService.buscarDentistaPorId(id)

  	  this.consultasDoDentista = this.consultaService.listarConsultasPeloDentista(id); 

    }
}
