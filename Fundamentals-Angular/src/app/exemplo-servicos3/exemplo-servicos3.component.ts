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



  constructor (private logger: ExemploLoggerService) {

  }
  

  adcionarNome55 (){
    this.logger.logar(`O nome adcionado foi ${this.nome55}!!`)
  }

  //adcionarDescricao33 () {
  //  console.log(`A descrição foi ${this.descricao33}!!`)
  //}
}
