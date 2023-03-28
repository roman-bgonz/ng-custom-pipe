import { User } from '../interfaces/user.interface';
import { OrderByPipe } from './order-by.pipe';
describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('Should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return the original value, if it is not an array', () => {
    const nonArray = 'this is not an array';
    const params = ['name', 'asc'];
    const result = pipe.transform(nonArray as unknown as unknown[], ...params);

    expect(result).toBe(nonArray);
  });

  it('Should sort array by name in ascending order', () => {
    const params = ['name', 'asc'];
    const users: User[] = [
      {
        id: 5,
        name: 'Oswaldo Fake',
        city: 'Mexico City',
        gender: 'Male',
      },
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
    ];

    const sortedUser = pipe.transform(users, ...params);

    const sortedList = [
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
      {
        id: 5,
        name: 'Oswaldo Fake',
        city: 'Mexico City',
        gender: 'Male',
      },
    ];

    expect(sortedUser).toEqual(sortedList);
  });

  it('Should sort array by name in descending order', () => {
    const params = ['name', 'desc'];
    const users: User[] = [
      {
        id: 5,
        name: 'Oswaldo Fake',
        city: 'Mexico City',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
    ];

    const sortedUser = pipe.transform(users, ...params);

    const sortedList = [
      {
        id: 5,
        name: 'Oswaldo Fake',
        city: 'Mexico City',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
    ];

    expect(sortedUser).toEqual(sortedList);
  });

  it('Should sort array by id in asc order', () => {
    const params = ['id'];
    const users: User[] = [
      {
        id: 5,
        name: 'Oswaldo Fake',
        city: 'Mexico City',
        gender: 'Male',
      },
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake 2',
        city: 'Reynosa',
        gender: 'Male',
      },
    ];

    const sortedUser = pipe.transform(users, ...params);

    const sortedList = [
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake 2',
        city: 'Reynosa',
        gender: 'Male',
      },
      {
        id: 5,
        name: 'Oswaldo Fake',
        city: 'Mexico City',
        gender: 'Male',
      },
    ];

    expect(sortedUser).toEqual(sortedList);
  });

  it('Should sort array by id in desc order', () => {
    const params = ['id', 'desc'];
    const users: User[] = [
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
    ];

    const sortedUser = pipe.transform(users, ...params);

    const sortedList = [
      {
        id: 2,
        name: 'Mario Fake',
        city: 'Reynosa',
        gender: 'Male',
      },
      {
        id: 1,
        name: 'Josue Fake',
        city: 'Madrid',
        gender: 'Male',
      },
    ];

    expect(sortedUser).toEqual(sortedList);
  });
});
