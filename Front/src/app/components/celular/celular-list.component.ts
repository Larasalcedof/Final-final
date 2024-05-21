import { Component, OnInit } from '@angular/core';
import { Celular } from '../../model/Celular';
import { CelularService } from '../../service/celular.service';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html'
})
export class CelularListComponent implements OnInit {
  celulares: Celular[];

  constructor(private celularService: CelularService) {}

  ngOnInit(): void {
    this.celularService.getCelulares().subscribe(data => {
      this.celulares = data;
    });
  }
}

