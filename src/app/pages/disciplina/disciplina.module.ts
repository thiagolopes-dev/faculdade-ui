import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/primeng.module';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
import { DisciplinaRoutingModule } from './disciplina.routing';



@NgModule({
  imports: [
    CommonModule,
    DisciplinaRoutingModule,
    PrimengModule
  ],
  declarations: [
  DisciplinaCadastroComponent,
  DisciplinaListaComponent
  ]
})
export class DisciplinaModule { }