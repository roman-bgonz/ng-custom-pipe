import { User } from './../interfaces/user.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: User[], ...args: any[]): User[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const [order = 'asc'] = args;

    return value.sort((a, b) => {
      const compare = a.name.localeCompare(b.name);
      return order == 'asc' ? compare : -compare;
    });
  }
}
