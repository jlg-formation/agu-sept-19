import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() seconds: number;

  remaining$: Observable<number>;


  constructor() {
    console.log('seconds: ', this.seconds);
  }

  ngOnInit() {
    console.log('ngInit seconds: ', this.seconds);
    this.remaining$ = interval(1000).pipe(
      map(d => d + 1),
      startWith(0),
      map(d => this.seconds - d),
      take(this.seconds + 1),
    );
  }

}
