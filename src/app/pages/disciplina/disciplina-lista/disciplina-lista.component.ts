import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css']
})
export class DisciplinaListaComponent implements OnInit {
  
  disciplinas = [];
  
  constructor() { }

  ngOnInit() {
  }

}
