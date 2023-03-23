import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiroComponent/primeiroComponent.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { NultilicaPorPipe } from './nultilica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponentComponent,
    NultilicaPorPipe,
    PipeCustomizadoComponent//adicionei do nome da exportclasse na pasta primeiro Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
