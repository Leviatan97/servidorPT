import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
