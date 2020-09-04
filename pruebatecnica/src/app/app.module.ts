import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductoPipe } from './pipes/producto.pipe'
const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    InicioComponent,
    ProductoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
