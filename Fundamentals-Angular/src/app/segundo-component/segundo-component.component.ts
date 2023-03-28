import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {
  nome1 = "Dhoy"; //interpolação de texto, para passar algo da classe para o html
  dataNascimento = "1998-01-01";

  urlImagem = "/assets/foca.jpg"; // as imagens ficam no  arquivo assets, aqui é para o uso do property

  mostrarDataNascimento (){
    alert(`A data de nascimento: ${this.dataNascimento}`); //cuidado com as aspas, pois elas são invertidas (clases), existem 3 tipos de aspas... "para chamar uma função pai", 'para chamar a função filha de dentro da pai' e a para interpolação que é `interpolação, para concatenar dados`
  }
}
// o property binding liga as propreidades de tags do html com as proriedaes dos componentes ex.:urlImage
//Event binding ligar os metodos do meu componente as ações/eventos que acontecem no html
//two-way binding 