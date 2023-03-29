import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
  @Input() sobrenomeDoPai1 = ""; //aqui atraves desse decorador @ ele vai receber o sobrenome do pai //atraves do input inserimos informações dentro do componente
  nome11 = ""; // aqui recebe a propriedade do html two-way [(ngModel)]

  @Output() mostrarNome =  new EventEmitter(); //esse mostraNome vem do evento do componente pai

  
}
