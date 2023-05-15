import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { DentistaService, Dentista } from '../shared';

@Component({
  selector: 'app-cadastrar-dentista',
  templateUrl: './cadastrar-dentista.component.html',
  styleUrls: ['./cadastrar-dentista.component.css']
})
export class CadastrarDentistaComponent implements OnInit {

  @ViewChild('formDentista', { static: true }) formDentista!: NgForm;

  dentista: Dentista = new Dentista();

  constructor(
    private dentistaService: DentistaService,
  	private router: Router) { }

  ngOnInit() {
  	this.dentista = new Dentista();
  }

  cadastrarDentista(): void {
    if (this.formDentista.form.valid) {
      this.dentista.situacao = true
  	  this.dentistaService.cadastrar(this.dentista);
  	  this.router.navigate(['/dentista/listar']);
    }
  }
}
