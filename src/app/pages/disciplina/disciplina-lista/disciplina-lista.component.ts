import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css']
})
export class DisciplinaListaComponent implements OnInit {
  
  disciplinas = [];
  
  constructor(
    private disciplinaService: DisciplinaService
  ) { }

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas(){
    this.disciplinaService.listar().then((obj) => {
      this.disciplinas = obj;
    });
  }

}
