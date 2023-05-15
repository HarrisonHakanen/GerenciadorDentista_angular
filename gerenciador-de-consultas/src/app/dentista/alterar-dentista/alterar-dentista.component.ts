import { Component, OnInit, ViewChild } from '@angular/core';
import { DentistaService,Dentista } from '../shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar-dentista',
  templateUrl: './alterar-dentista.component.html',
  styleUrls: ['./alterar-dentista.component.css']
})
export class AlterarDentistaComponent {

  @ViewChild('formDentista', { static: true }) formDentista!: NgForm;
  dentista: Dentista = new Dentista();

  constructor(
    private dentistaService: DentistaService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dentista = this.dentistaService.buscarDentistaPorId(id);
  }

  atualizar(): void {
    if (this.formDentista.form.valid) {
	    this.dentistaService.atualizarDentista(this.dentista);
	    this.router.navigate(['/dentista/listar']);
    }
  }

}
