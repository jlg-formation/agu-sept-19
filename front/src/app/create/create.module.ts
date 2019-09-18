import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create/create.component';
import { SetupComponent } from './setup/setup.component';


@NgModule({
  declarations: [CreateComponent, SetupComponent],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
