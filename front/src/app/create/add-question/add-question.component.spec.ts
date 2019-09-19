import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Location } from '@angular/common';

import { AddQuestionComponent } from './add-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizzService } from 'src/app/quizz.service';
import { Quizz } from 'src/app/quizz';
import { Routes } from '@angular/router';
import { SetupComponent } from '../setup/setup.component';

describe('AddQuestionComponent', () => {
  let component: AddQuestionComponent;
  let fixture: ComponentFixture<AddQuestionComponent>;
  let location: Location;

  const myQuizzService = new QuizzService();
  const q = new Quizz();
  q.name = 'toto';
  myQuizzService.setCurrent(q);

  const routes: Routes = [
    { path: 'setup', component: SetupComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [AddQuestionComponent, SetupComponent],
      providers: [{
        provide: QuizzService, useValue: myQuizzService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    location = TestBed.get(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit', fakeAsync(() => {
    const nbr = myQuizzService.current.questions.length;
    component.submit();
    expect(myQuizzService.current.questions.length).toBe(nbr + 1);
    tick();
    expect(location.path()).toBe('/setup');
  }));
});
