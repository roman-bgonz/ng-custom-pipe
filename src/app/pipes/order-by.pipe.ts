import { User } from './../interfaces/user.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: unknown[], ...args: any[]): User[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const [property, order = 'asc']: string[] = args;

    return value.sort((a, b) => {
      const compare = a[property].localeCompare(b[property]);
      return order == 'asc' ? compare : -compare;
    });
  }
}
