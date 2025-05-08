import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({

  exports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    ToastModule,
    InputSwitchModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
