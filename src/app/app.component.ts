import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  property: string = 'name';
  order: string = 'asc';

  users: User[] = [
    {
      id: 1,
      name: 'Oswaldo',
      city: 'Mexico City',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Adriana',
      city: 'Monterrey',
      gender: 'Female',
    },
    {
      id: 3,
      name: 'Josue',
      city: 'Madrid',
      gender: 'Male',
    },
    {
      id: 4,
      name: 'Mario',
      city: 'Reynosa',
      gender: 'Male',
    },
  ];
}
