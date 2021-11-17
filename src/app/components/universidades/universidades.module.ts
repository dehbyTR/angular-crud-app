import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversidadesComponent } from './universidades.component';
import { UniversidadesRoutingModule } from "./universidade-routing.module";
import { PaisService } from "src/app/services/pais.service";
import { UniversidadesService } from "src/app/services/universidades.service";



@NgModule({
  declarations: [
    UniversidadesComponent
  ],
  imports: [
    CommonModule,
    UniversidadesRoutingModule
  ],
  providers: [
    PaisService,
    UniversidadesService
  ]
})
export class UniversidadesModule { }
