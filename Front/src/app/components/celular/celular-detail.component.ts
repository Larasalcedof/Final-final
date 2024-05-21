import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelularService } from '../../service/celular.service';
import { Celular } from '../../model/Celular';

@Component({
  selector: 'app-celular-detail',
  templateUrl: './celular-detail.component.html',
  styleUrls: ['./celular-detail.component.css']
})
export class CelularDetailComponent implements OnInit {
  celular: Celular | undefined;

  constructor(
    private route: ActivatedRoute,
    private celularService: CelularService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.celularService.getCelular(id).subscribe(data => {
      this.celular = data;
    });
  }
}

