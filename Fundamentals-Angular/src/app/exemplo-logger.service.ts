import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploLoggerService {

  mensagens: string [] = [];

  logar (mensagem: string) {
    this.mensagens.push(mensagem);
    alert(mensagem);
    console.log(mensagem);
  }

  exibeTodosOsLogs() {
    alert(this.mensagens);
    console.log(this.mensagens);
  }
}
