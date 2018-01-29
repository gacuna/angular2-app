import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUserService implements InMemoryDbService {
  createDb() {
    let deliveries = [
		{
	      "id":1,
	      "name":"Pizza Bender",
	      "description":"Pizzeria de mala muerte",
	      "specialities": "Pizza de Cannabis",
	      "address": "Calle Falsa 123",
	      "openingTime": 20,
	      "closingTime": 1,
	      "phoneNumber":"4555-4455",
	      "admContact": {
	      	"name": "Hermi",
	      	"lastName": "Marmota",
	      	"phoneNumber": "4431-1122",
	      	"email": "hermi@hermi.com",
	      	"isAdmContact": true
	      },
	      "commercialContact": {
	      	"name": "Hermi",
	      	"lastName": "Marmota",
	      	"phoneNumber": "5555-3322",
	      	"email": "hermi@hermi.com",
	      	"isAdmContact": false
	      }
		},
		{
	      "id":2,
	      "name":"Helados Chupala",
	      "description":"Heladeria de Barrio",
	      "specialities": "Helados con babosas",
	      "address": "x Colectora",
	      "phoneNumber":"4155-3333",
	      "openingTime": 20,
	      "closingTime": 1,
	      "admContact": {
	      	"name": "Bender",
	      	"lastName": "Rodriguez",
	      	"phoneNumber": "1231-0001",
	      	"email": "Bender@Bender.com",
	      	"isAdmContact": true
	      },
	      "commercialContact": {
	      	"name": "Bender",
	      	"lastName": "Rodriguez",
	      	"phoneNumber": "1231-0001",
	      	"email": "Bender@Bender.com",
	      	"isAdmContact": false
	      }
		}
	];

    return {deliveries};
  }
}
