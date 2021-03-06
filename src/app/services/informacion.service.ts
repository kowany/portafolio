import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  cargada = false;
  cargada_sobre_nosotros = false;
  info: any = {};
  equipo: any[] = [];


  constructor( public http: Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  carga_info() {
    this.http.get( 'assets/data/info.pagina.json')
      .subscribe( data => {
        this.info =  data.json();
        this.cargada = true;
      });
  }
  carga_sobre_nosotros () {
    return this.http.get( 'https://ng-http-4e270.firebaseio.com/equipo.json' )
      .subscribe( data => {
        this.cargada_sobre_nosotros = true;
        this.equipo =  data.json();
      });
  }
}
