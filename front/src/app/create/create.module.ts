import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create/create.component';
import { SetupComponent } from './setup/setup.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FinishedComponent } from './finished/finished.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CreateComponent, SetupComponent, AddQuestionComponent, FinishedComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FontAwesomeModule,
  ]
})
export class CreateModule { }
