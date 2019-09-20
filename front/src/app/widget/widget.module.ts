import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { TimerComponent } from './timer/timer.component';
import { TimeFormatPipe } from './time-format.pipe';
import { RadioButtonComponent } from './radio-button/radio-button.component';



@NgModule({
  declarations: [AutofocusDirective, TimerComponent, TimeFormatPipe, RadioButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, TimerComponent, TimeFormatPipe, RadioButtonComponent]
})
export class WidgetModule { }
