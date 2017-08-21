import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionService } from './../../services/informacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( public _is: InformacionService, public router: Router ) { }

  buscar_producto( termino ) {
    this.router.navigate(['buscar', termino]);
  }
}
