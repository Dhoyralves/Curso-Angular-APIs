import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiroComponent/primeiroComponent.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { NultilicaPorPipe } from './nultilica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { TrabalhandoListasComponent } from './trabalhando-listas/trabalhando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemploSercicos1Component } from './exemplo-sercicos1/exemplo-sercicos1.component';
import { ExemploServicos2Component } from './exemplo-servicos2/exemplo-servicos2.component';
import { ExemploServicos3Component } from './exemplo-servicos3/exemplo-servicos3.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent, //adicionei do nome da exportclasse na pasta primeiroComponent
    SegundoComponentComponent,
    NultilicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    TrabalhandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemploSercicos1Component,
    ExemploServicos2Component,
    ExemploServicos3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
