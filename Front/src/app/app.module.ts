import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelularListComponent } from './components/celular/celular-list.component';
import { CelularCreateComponent } from './components/celular/celular-create.component';
import { CelularDetailComponent } from './components/celular/celular-detail.component';
import { CelularService } from './service/celular.service';

@NgModule({
  declarations: [
    AppComponent,
    CelularListComponent,
    CelularCreateComponent,
    CelularDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CelularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
