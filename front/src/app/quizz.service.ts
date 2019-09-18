import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();

  create(name: string) {
    this.current = new Quizz();
    this.current.name = name;
    this.saveCurrent();
  }

  saveCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (str === null) {
      return null;
    }
    const quizz = JSON.parse(str);
    quizz.__proto__ = Quizz.prototype;
    return quizz;
  }


}
