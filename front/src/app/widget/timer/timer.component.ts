import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() seconds: number;

  @Output() dringdring = new EventEmitter<{ message: string }>();


  remaining: number;


  constructor() {
    console.log('seconds: ', this.seconds);
  }

  ngOnInit() {
    console.log('ngInit seconds: ', this.seconds);
    interval(1000).pipe(
      map(d => d + 1),
      startWith(0),
      map(d => this.seconds - d),
      take(this.seconds + 1),
    ).subscribe({
      next: data => this.remaining = data,
      complete: () => {
        console.log('complete');
        this.dringdring.emit({
          message: 'timer tells you it is over.'
        });
      }
    });
  }

}
