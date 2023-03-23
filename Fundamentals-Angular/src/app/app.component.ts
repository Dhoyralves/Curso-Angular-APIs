import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//arquivos que vão aparecer na tela
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fundamentals-Angular';
}
//sintaxe de decorador o @...@component esta decorando uma classe, nesse caso a class AppComponent
//ele usa 3 atributos para mostrar o que vai aparecer na tela principal/inicial, o seletor, o templateUrl e o styleUrls
//olhe que nesse arquivo os prefixos app é usado e faz referencia com o arquivo angular.json, onde há um atributo tem o prefixo; "app" 


// esse arquivo chamam de classe princial pois vai servir de controlador, onde vai ter as propriedades que estarão dentro da minha pagina, os metodos(qnd clicar no botaõ vai disparar um metodo ou evento para fazer tal ação) e os estilos
