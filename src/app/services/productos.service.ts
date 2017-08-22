import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productos_filtrado: any[] = [];
  cargando = true;

  constructor( private http: Http) {
    this.cargar_productos();
  }

  public buscar_producto( termino: string ) {

    if ( this.productos.length === 0 ) {
      this.cargar_productos()
        .then( () => {
          this.filtrar_productos( termino );
        });
    } else {
      this.filtrar_productos( termino );
    }

  }
  public filtrar_productos( termino ) {
    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach( prod => {
      prod.categoria = prod.categoria.toLowerCase();
      prod.titulo = prod.titulo.toLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.indexOf( termino ) >= 0 ) {
        this.productos_filtrado.push( prod );
      }

    });
  }

  public cargar_producto( cod: string ) {
      return this.http.get( `https://ng-http-4e270.firebaseio.com/productos/${cod}.json` );
  }
  public cargar_productos() {
    this.cargando = true;

    const promesa = new Promise( (resolve, reject) => {
        this.http.get( 'https://ng-http-4e270.firebaseio.com/productos_idx.json' )
          .subscribe( res => {
              this.cargando = false;
              this.productos = res.json();
              resolve();
          });
    });
    return promesa;
  }
}
