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

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent, //adicionei do nome da exportclasse na pasta primeiroComponent
    SegundoComponentComponent,
    NultilicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    TrabalhandoListasComponent
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
