import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUserService implements InMemoryDbService {
  createDb() {
    let users = [
    	{ "id": 1, "firstName": "Bender", "lastName": "Rodriguez", "email": "bender@pornhub.com" },
    	{ "id": 2, "firstName": "Gustavo", "lastName": "Mito", "email": "gustavo@cracklover.com" },
    	{ "id": 3, "firstName": "Hermi", "lastName": "Fantasmita", "email": "hermi@fantasmita.com" }
    ];

    let deliveries = [
    	{ "id": 1, "name": "Pizza Bender", "phone": "4555-4455"},
    	{ "id": 2, "name": "Helados Chupala", "phone": "4155-3333"}
    ];

    return {users, deliveries};
  }
}