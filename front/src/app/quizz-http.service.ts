import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';
import { Quizz } from './quizz';

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
    this.http.get<{[key: string]: Quizz}>('http://localhost:3000/api/v1/quizz').subscribe({
      next: data => {
        this.map = data;
        this.saveMap();
      },
      error: err => console.error('error', err),
      complete: () => console.log('complete get')
    });
  }

  addQuizz() {
    super.addQuizz();
    this.http.post('http://localhost:3000/api/v1/quizz', this.map).subscribe({
      next: data => console.log('data', data),
      error: err => console.error('error', err),
      complete: () => console.log('complete post')
    });
  }
}
