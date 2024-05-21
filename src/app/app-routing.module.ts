import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularListComponent } from './components/celular/celular-list.component';
import { CelularCreateComponent } from './components/celular/celular-create.component';
import { CelularDetailComponent } from './components/celular/celular-detail.component';

const routes: Routes = [
  { path: 'celulares', component: CelularListComponent },
  { path: 'celulares/create', component: CelularCreateComponent },
  { path: 'celulares/:id', component: CelularDetailComponent },
  { path: '', redirectTo: '/celulares', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
