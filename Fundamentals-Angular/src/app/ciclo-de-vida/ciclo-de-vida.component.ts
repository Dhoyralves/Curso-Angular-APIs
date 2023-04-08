import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit {

  horario = new Date();
  timer: any = null!; //isso significa que ele começa com nulo devido o !

  ngOnInit(): void { //esse metodo é o segundo a iniciar o componentes (mas usualmente é o primeiro pq é o mais utiizado), pq ele não inicia de um componente pai ou
    console.log("O evento OnInit disparou")
    this.timer = setInterval(() => this.horario = new Date(), 1000); //o setinterval é uma função que o navegador dispobiliza para executar uma ação de tempos em tempos, o 1000ms = 1s é o timemalt, significa de quanto em quanto tempo a função vai ser executada, a ação é dado em ms
  }

}
