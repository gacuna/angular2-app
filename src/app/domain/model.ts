//Domain Classes
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

  constructor() {}

}

export class Contact {
  name: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  email: string = "";
  isAdmContact: boolean = false;
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
    //In-Memory-Backend permite expresiones regulares
    return `?${this.key}=${this.value}+`;
  }
}

// MOdal Classes
export class ModalMessage {
  type: string;
  content: string;

  constructor() {}
}
