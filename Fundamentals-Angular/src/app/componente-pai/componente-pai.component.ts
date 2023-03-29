import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  sobrenomeDoPai = "Alves"; //vou passar esse sobrenome do pai pro componente filho...


  mostrarNomeCompleto(nomeCompleto: any){
    alert(`O nome completo de filho para pai é: ${nomeCompleto}`);
  } //evento output, serve para emitir/disparar eventos/funções que estao definidas no elemento pai, onde vou disparar o metodo mostrarNomeCompleto que esta definido no componente pai atraves do elemento filho // uso o any para mostrar o $event no html
}
