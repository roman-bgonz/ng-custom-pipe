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
      if (typeof a[property] == 'string') {
        const compare = a[property].localeCompare(b[property]);
        return order == 'asc' ? compare : -compare;
      } else {
        const orderNum = this.orderNumberFn(a, b, property);
        return order == 'asc' ? orderNum : -orderNum;
      }
    });
  }

  private orderNumberFn = (a: any, b: any, property: string) => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    } else {
      return 0;
    }
  };
}
