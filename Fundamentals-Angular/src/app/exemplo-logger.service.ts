import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploLoggerService { //service é uma funcionalidade que posso utilizar em varios componentes

  mensagens: string [] = [];

  logar (mensagem: string) { //isso é o principal e pode ter so o logar e o console.log
    this.mensagens.push(mensagem);
    alert(mensagem);
    console.log(mensagem);
  }

  exibeTodosOsLogs() {
    alert(this.mensagens);
    console.log(this.mensagens);
  }
}
//esse arquivo é para o exemplo-serviço3, olhe os templates