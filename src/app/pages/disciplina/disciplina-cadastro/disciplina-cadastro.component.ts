import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disciplina } from '../../core/models/disciplina.model';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {
   disciplina = new Disciplina();
  constructor(
    private disciplinaService: DisciplinaService
  ) { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    console.log(form);
  }

  cadastroDisciplina(form: NgForm){
    console.log(this.disciplina);
    // this.disciplinaService.adicionar(this.disciplina).then((obj) => {
      
    // })
  }
}
