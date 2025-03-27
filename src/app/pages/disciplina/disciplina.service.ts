import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  disciplinaUrl: string = '';

  constructor(private http: HttpClient) {
    this.disciplinaUrl =
      'https://658b1550ba789a9622386895.mockapi.io/disciplina';
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(this.disciplinaUrl)).then(
      (response: any) => {
        return response;
      }
    );
  }
}
