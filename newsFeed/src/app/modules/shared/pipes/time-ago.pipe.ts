import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  private value = new Date();

  transform(date: string): string {
    this.value = new Date(date);
    return formatDistance(new Date(), this.value);
  }

}
