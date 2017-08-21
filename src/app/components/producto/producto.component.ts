import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {
  producto: any = undefined;
  cod: any = undefined;

  constructor( public route: ActivatedRoute, public _ps: ProductosService ) {
    this.route.params.subscribe( parametros => {
      this._ps.cargar_producto( parametros['id'])
        .subscribe( data => {
          this.producto = data.json();
          this.cod = parametros['id'];
        });
    });
   }

}
