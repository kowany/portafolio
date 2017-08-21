import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AboutComponent,
    PortafolioComponent,
    ProductoComponent,
    SearchComponent
 } from './components/index.paginas';


const appRoutes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes, { useHash: true} )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
