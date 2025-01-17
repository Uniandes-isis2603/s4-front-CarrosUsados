import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutomovilService } from '../automovil/automovil.service';
import { ModeloService } from '../modelo/modelo.service';
import { MarcaService } from '../marca/marca.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [InicioComponent],
  exports: [InicioComponent],
  providers: [AutomovilService, ModeloService, MarcaService]
})
export class InicioModule { }
