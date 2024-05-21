import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from '../../model/Celular';
import { CelularService } from '../../service/celular.service';

@Component({
  selector: 'app-celular-create',
  templateUrl: './celular-create.component.html'
})
export class CelularCreateComponent {
  celular: Celular = {
    marca: '',
    serial: '',
    fechaCompra: new Date(),
    anioLanzamiento: 0,
    precio: 0,
    sistemaOperativo: '',
    gama: ''
  };

  constructor(private celularService: CelularService, private router: Router) {}

  onSubmit(): void {
    this.celularService.createCelular(this.celular).subscribe(() => {
      this.router.navigate(['/celulares']);
    });
  }
}
