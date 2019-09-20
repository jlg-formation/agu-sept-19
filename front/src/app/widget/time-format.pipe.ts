import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number, prefixByZero: boolean = false): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${prefixByZero ? (minutes + '').padStart(2, '0') : minutes}:${(seconds + '').padStart(2, '0')}`;
  }

}
