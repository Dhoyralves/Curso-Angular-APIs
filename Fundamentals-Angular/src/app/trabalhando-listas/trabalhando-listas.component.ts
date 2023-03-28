import { Component } from '@angular/core';
import { Celular } from 'src/types/Celular';

@Component({
  selector: 'app-trabalhando-listas',
  templateUrl: './trabalhando-listas.component.html',
  styleUrls: ['./trabalhando-listas.component.css']
})
export class TrabalhandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "celular Xiaomi", descricao: "poco11", esgotado: false},
    {id: 2, nome: "celular iphone", descricao: "XR11", esgotado: true},
    {id: 3, nome: "celular sansung", descricao: "s22+", esgotado: true},
    {id: 4, nome: "celular sony", descricao: "expyria", esgotado: false},
    {id: 5, nome: "celular Xiaomi", descricao: "", esgotado: true},
  ]
}
//celulares aqui é um vetor de Celular