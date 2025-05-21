import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/errorHandler.service';
import { Professor } from '../../core/models/professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css'],
})
export class ProfessorCadastroComponent implements OnInit {
  professor = new Professor();
  idProf: number;
  salvando: boolean = false;
  constructor(
    private profService: ProfessorService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private spinner: NgxSpinnerService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.idProf = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Professor');

    if (this.idProf) {
      this.spinner.show();
      this.carregar(this.idProf);
    } else {
      this.professor.status = true;
    }
  }

  get editando() {
    return Boolean(this.professor.id);
  }

  carregar(id: number) {
    this.profService
      .buscarPorId(id)
      .then((obj) => {
        this.professor = obj;
        this.atualizarTituloEdicao();
        this.spinner.hide();
      })
      .catch((erro) => {
        this.spinner.hide();
         this.errorHandler.handle(erro);
      });
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Professor:${this.professor.id}`);
  }

  salvar(form: NgForm) {
    console.log(form);
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.cadastro(form);
    }
  }

  cadastro(form: NgForm) {
    this.salvando = true;
    console.log(this.professor);
    this.profService.adicionar(this.professor).then((obj) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Professor',
        detail: 'cadastrado com sucesso!',
      });
      this.salvando = false;
      this.router.navigate(['/professores']);
    });
  }

  atualizar(form: NgForm) {
    this.salvando = true;
    this.profService
      .atualizar(this.professor)
      .then((obj) => {
        this.professor = obj;
        this.salvando = false;
        this.messageService.add({
          severity: 'info',
          summary: 'Professor',
          detail: `${obj.nome}, alterado com sucesso`,
        });
        this.atualizarTituloEdicao();
        this.router.navigate(['/professores']);
      })
      .catch((erro) => {
        this.salvando = false;
      });
  }
}
