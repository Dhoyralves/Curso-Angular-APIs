import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() titulo = "";
    @Input() cor = "#ccc"; //caso ele n receba nenhum parametro ele recebe essa cor


}

//elemento ngcontent, usado para reutilizar nosso codigo, quando precisamos colocar componentes dentro de outros, colocando nossos templates dentro desses containers
