import { Component } from '@angular/core';
import { ExemploLoggerService } from '../exemplo-logger.service';

@Component({
  selector: 'app-exemplo-servicos3',
  templateUrl: './exemplo-servicos3.component.html',
  styleUrls: ['./exemplo-servicos3.component.css']
})
export class ExemploServicos3Component {
  nome55 = "";
  descricao33 = "";



  constructor (private logger: ExemploLoggerService) { //eu injeto meu serviço nos componentes a partir do contructor
  }
  
  //constructor(public logger: ExemploLoggerService){ //com o uso do metodo publiconão preciso chamar o metodo adcionarNome55, posso fazer diretamente no template .html onde no click do botaõ vc colocaria dentro das aspas "this.logger.exibeTodosOsLogs()"

  //}

  adcionarNome55 (){
    this.logger.logar(`O nome adcionado foi ${this.nome55}!!`)
  }
  adcionarDescricao33(){
    this.logger.logar(`A descição ${this.descricao33}!!!`)
  }

  verTudo(){
    this.logger.exibeTodosOsLogs()
  }
  //adcionarDescricao33 () {
  //  console.log(`A descrição foi ${this.descricao33}!!`)
  //}
}
