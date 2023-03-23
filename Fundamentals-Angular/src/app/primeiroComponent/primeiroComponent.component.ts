import { Component } from "@angular/core";

//componente é uma classe
@Component({
    selector: "app-primeirocomponente", //é a forma que vou me referi ao componente quando for utilizar ele
    template: "<h2> Primer Componente </h2>",
    styles: ["h2 { color: red; }"]
})
export class PrimeiroComponenteComponent{}




//a ordem é criar um @componente com esses parametros, depois ir para app.module.ts e adcionar a exporr class nas declarations e depois no html adcionar o seletor como tag