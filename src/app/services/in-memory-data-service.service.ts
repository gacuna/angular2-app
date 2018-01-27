import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUserService implements InMemoryDbService {
  createDb() {
    let users = [
    	{ "id": 1, "firstName": "Bender", "lastName": "Rodriguez", "email": "bender@pornhub.com" },
    	{ "id": 2, "firstName": "Gustavo", "lastName": "Mito", "email": "gustavo@cracklover.com" },
    	{ "id": 3, "firstName": "Hermi", "lastName": "Fantasmita", "email": "hermi@fantasmita.com" }
    ];

    let deliveries = [
		{
	      "id":1,
	      "name":"Pizza Bender",
	      "description":"Pizzeria de mala muerte",
	      "specialities": "Pizza de Cannabis",
	      "address": "Calle Falsa 123",
	      "openingTime": 20,
	      "closingTime": 1,
	      "phone":"4555-4455",
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
	      	"phoneNumber": "4431-1122",
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
	      "phone":"4155-3333",
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

    return {users, deliveries};
  }
}