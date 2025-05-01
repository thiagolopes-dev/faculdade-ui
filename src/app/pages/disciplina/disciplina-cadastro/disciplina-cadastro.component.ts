import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private disciplinaService: DisciplinaService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    console.log(form);
  }

  cadastroDisciplina(form: NgForm){
    console.log(this.disciplina);
     this.disciplinaService.adicionar(this.disciplina).then((obj) => {
      this.messageService.add({severity:'success', summary:'Disciplina', detail:'cadastrado com sucesso!'});
      this.router.navigate(['/disciplinas']);
  })
  }
}
