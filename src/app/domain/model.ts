export class User {
	firstName: string;
	lastName: string;
	email: string;
}

export class Delivery {
  name: string;
  description: string;
  specialties: string;
  address: string;
  openingTime: number;
  closingTime: number;
  tel: string;
  admContact: Contact;
  commercialContact: Contact;
}

export class Contact {
  name: string;
  lastName: string;
  tel: string;
  email: string;
  isAdmContact: boolean;
}

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

export class ModalMessage {
  type: string;
  content: string;

  constructor() {}
}