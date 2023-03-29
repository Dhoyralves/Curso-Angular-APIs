import { Component,Input, } from '@angular/core';

@Component({
  selector: 'app-componente-personalizado',
  templateUrl: './componente-personalizado.component.html',
  styleUrls: ['./componente-personalizado.component.css']
})
export class ComponentePersonalizadoComponent {
  @Input() nomee = "";
  @Input() sobrenomee = "";
}
//isso é um decorador de input para personalizar um componente
// o @ significa o decorador
// faço isso para passar informações diferentes para meu componente, para personalizar os componentes
//tenho que importar esse decorador usando o import la na linha 1
// nomee e sobrenomee são propriedades para customização