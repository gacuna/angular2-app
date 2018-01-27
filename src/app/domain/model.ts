//Domain Classes
export class User {
  id: number;
	firstName: string;
	lastName: string;
	email: string;
}

export class Delivery {
  id: number;
  name: string;
  description: string;
  specialities: string;
  address: string;
  openingTime: number;
  closingTime: number;
  phoneNumber: string;
  admContact: Contact;
  commercialContact: Contact;
}

export class Contact {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  isAdmContact: boolean;
}


//Filter Classes
export class SearchCondition {
  description: string;
  entityPropertyName: string;

  constructor(description: string, entityPropertyName: string) {
    this.description = description;
    this.entityPropertyName = entityPropertyName;
  }
}

export class SearchFilter {
  label: string; //Texto a visualizar en el SELECT. EG: Nombre
  key: string; //Nombre de la propiedad del objeto de dominio: Ejemplo "first_name"
  value: string;// este es el valor a buscar.

  constructor() {}

  getSearchQuery() {
    return `?${this.key}=^${this.value}`;
  }
}

// MOdal Classes
export class ModalMessage {
  type: string;
  content: string;

  constructor() {}
}