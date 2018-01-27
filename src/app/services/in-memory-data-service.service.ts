import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemUserService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, firstName: 'Bender', lastName: '', email: '' },
      { id: 2, firstName: 'Gustavo', lastName: '', email: '' },
      { id: 3, firstName: 'Hermi', lastName: '', email: '' },
      { id: 4, firstName: 'Fantasmita', lastName: '', email: '' }
    ];
    return {users};
  }
}