import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUserService implements InMemoryDbService {
  createDb() {
    let deliveries = [
		{
	      "id":1,
	      "name":"Sushi Pop",
	      "description":"comida japonesa",
	      "specialities": "Sushi",
	      "address": "Maipu 954",
	      "openingTime": 12,
	      "closingTime": 15,
	      "phoneNumber":"4555-4455",
	      "admContact": {
	      	"name": "Juan",
	      	"lastName": "Rodriguez",
	      	"phoneNumber": "4555-4455",
	      	"email": "juan.rodriguez@sushipop.com",
	      	"isAdmContact": true
	      },
	      "commercialContact": {
          "name": "Juan",
          "lastName": "Rodriguez",
          "phoneNumber": "4555-4455",
          "email": "juan.rodriguez@sushipop.com",
	      	"isAdmContact": false
	      }
		},
		{
	      "id":2,
	      "name":"Heladeria Freddo",
	      "description":"Cremas Heladas",
	      "specialities": "Postres Helados",
	      "address": "Av. Cabildo 3510",
	      "phoneNumber":"4810-2100",
	      "openingTime": 12,
	      "closingTime": 23,
	      "admContact": {
	      	"name": "Pablo",
	      	"lastName": "Diaz",
	      	"phoneNumber": 4810-2100",
	      	"email": "pdiaz@freddo.com.ar",
	      	"isAdmContact": true
	      },
	      "commercialContact": {
	      	"name": "Laura",
	      	"lastName": "Casas",
	      	"phoneNumber": "4325-0001",
	      	"email": "lcasas@freddo.com.ar",
	      	"isAdmContact": false
	      }
		}
	];

    return {deliveries};
  }
}
