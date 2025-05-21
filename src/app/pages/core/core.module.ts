import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PrimengModule } from 'src/app/primeng.module';
import { DisciplinaService } from '../disciplina/disciplina.service';
import { ProfessorService } from '../professor/professor.service';

@NgModule({
  imports: [PrimengModule, RouterModule, ToastModule],
  providers: [ConfirmationService, MessageService, DisciplinaService, ProfessorService],
})
export class CoreModule {}
