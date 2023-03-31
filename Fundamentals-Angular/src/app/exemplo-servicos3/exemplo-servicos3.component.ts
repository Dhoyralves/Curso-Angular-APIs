import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos3',
  templateUrl: './exemplo-servicos3.component.html',
  styleUrls: ['./exemplo-servicos3.component.css']
})
export class ExemploServicos3Component {
  nome55 = "";
  descricao33 = "";

  adcionarNome55(){
    console.log(`O nome adcionado foi ${this.nome55}!!`)
  }

  adcionarDescricao33 () {
    console.log(`O nome adcionado foi ${this.descricao33}!!`)
  }
}
