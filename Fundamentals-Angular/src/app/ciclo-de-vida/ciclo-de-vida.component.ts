import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy{

  horario = new Date();
  timer: any = null!; //isso significa que ele começa com nulo devido o !

  @Input() texto111 = ""; // isso vem do componente ciclo-de-vida-pai, para disparo de outro evento antes do OnInit   //ele vai receber a propriedade texto atraves desse input


  ngOnInit(): void { //esse metodo é o segundo a iniciar o componentes (mas usualmente é o primeiro pq é o mais utiizado), pq ele não inicia de um componente pai ou
    console.log("O evento OnInit disparou")
    this.timer = setInterval(() => this.horario = new Date(), 1000); //o setinterval é uma função que o navegador dispobiliza para executar uma ação de tempos em tempos, o 1000ms = 1s é o timemalt, significa de quanto em quanto tempo a função vai ser executada, a ação é dado em ms
  }

  ngOnChanges(changes: SimpleChanges): void { //o parametro changes tras as mudanças, esse evento é disparado antes do oninit
    console.log("O evento Onchanges disparou com as seguintes mudanças" + changes);
    console.log(changes);
      
  }
    
  ngOnDestroy(): void { //devo fazer essa limpeza do componente quando ele sai da tela, pq ele vai atualizar propriedades que não existem mais ,trazendo um erro... por isso uso o OnDestroy()... sempre quando fizermos uma subscriçãoseja num drimer ou chat, devemos encerrar esse evento usano o OnDestroy()... sempre que o componente sair da tela temos que encerrar esse evento
      clearInterval(this.timer);
  }

}
