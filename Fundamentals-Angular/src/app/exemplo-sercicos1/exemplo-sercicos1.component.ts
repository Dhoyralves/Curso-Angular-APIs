import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-sercicos1',
  templateUrl: './exemplo-sercicos1.component.html',
  styleUrls: ['./exemplo-sercicos1.component.css']
})
export class ExemploSercicos1Component {
  nome44 = "";

  

  adcionarNome44 (){ //isso é um metodo
    alert(`O nome ${this.nome44} foi adcionado!`);// mensagem na tela
    console.log(`O nome ${this.nome44} foi adcionado!`); //msg no console ctrl+shift+i, na aba console
  }








}
