import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../models/appointment';

@Pipe({
  name: 'billStatus'
})
export class BillStatusPipe implements PipeTransform {

  transform(items: any[], status: string): unknown {
    if (!items || !status) {
      return items;
  }
  // filter items array, items which match and return true will be
  // kept, false will be filtered out
  return items.filter(item => item.status === status);
  }

}
