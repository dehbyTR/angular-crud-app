import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais.component';
import { PaisRoutingModule } from "./pais-routing.module";
import { PaisService } from "src/app/services/pais.service";



@NgModule({
  declarations: [
    PaisComponent
  ],
  imports: [
    CommonModule, 
    PaisRoutingModule
  ],
  providers: [
    PaisService
  ]
})
export class PaisModule { }
