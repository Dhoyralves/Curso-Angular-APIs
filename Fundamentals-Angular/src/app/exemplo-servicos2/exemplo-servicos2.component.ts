import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  descricao22 = "";

  adcionarDescricao (){
    alert(`A descrção do seu produto é : ${this.descricao22}`);
    console.log(`A descrção do seu produto é : ${this.descricao22}`);
  }









}
