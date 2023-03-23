import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiroComponent/primeiroComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent//adicionei do nome da exportclasse na pasta primeiro Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
