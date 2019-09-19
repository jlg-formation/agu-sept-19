import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();
  map = this.getMap();

  create(name: string) {
    this.current = new Quizz();
    this.current.name = name;
    this.saveCurrent();
  }

  saveCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  setCurrent(q: Quizz) {
    this.current = q;
    this.saveCurrent();
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

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }

  addQuizz() {
    this.map[this.current.name] = this.current;
    this.saveMap();
  }

  saveMap() {
    localStorage.setItem('map', JSON.stringify(this.map));
  }

  getMap(): {[key: string]: Quizz} {
    const str = localStorage.getItem('map');
    if (str === null) {
      return {};
    }
    const map = JSON.parse(str);
    for (const p of Object.keys(map)) {
      map[p].__proto__ = Quizz.prototype;
    }
    return map;
  }

  hasQuizz(): boolean {
    return Object.keys(this.map).length > 0;
  }

  list(): Quizz[] {
    return Object.values(this.map);
  }


}
