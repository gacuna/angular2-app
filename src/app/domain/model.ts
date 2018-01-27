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
  type: string;
  label: string;
  labelValue: string;
  query: string;

  constructor() {}

  getType() {
    return this.type; // el tipo de filtro, EG: usersFilter
  }

  getLabel() {
    return this.label; // este es el nombre a mostrar. EG: Nombre
  }

  getLabelValue() {
    return this.labelValue; // este es el nombre del atributo en la domain class. EG: first_name
  }

  getQuery() {
    return this.query; // este es el valor a buscar. EG: esteban
  }
}

export class ModalMessage {
  type: string;
  content: string;

  constructor() {}
}