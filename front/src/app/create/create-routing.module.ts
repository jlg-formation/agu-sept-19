import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { SetupComponent } from './setup/setup.component';
import { AddQuestionComponent } from './add-question/add-question.component';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'add-question', component: AddQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
