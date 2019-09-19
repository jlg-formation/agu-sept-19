import { Injectable } from '@angular/core';
import { QuizzService } from './quizz.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor() {
    console.log('quizz http');
    super();
  }
}
