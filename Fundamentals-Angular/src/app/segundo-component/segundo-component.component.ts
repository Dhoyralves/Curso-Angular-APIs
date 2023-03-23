import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {
  nome1 = "Dhoy"; //interpolação de texto, para passar algo da classe para o html
  dataNascimento = "1998-01-01";
}
