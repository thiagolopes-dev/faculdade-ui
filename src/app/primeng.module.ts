import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({

  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    ToastModule
  ]
})
export class PrimengModule { }
