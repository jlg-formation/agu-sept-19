import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
    console.log('quizz http');
    this.fetchAll();
  }

  fetchAll() {
    this.http.get('http://localhost:3000/api/v1/quizz').subscribe({
      next: x => console.log('x', x),
      error: err => console.error('error', err),
      complete: () => console.log('complete')
    });
  }
}
