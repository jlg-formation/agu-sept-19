import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private router: Router, public quizz: QuizzService) { }

  ngOnInit() {
  }

  finish() {
    this.quizz.addQuizz();
    this.router.navigateByUrl('/finished');
  }

}
