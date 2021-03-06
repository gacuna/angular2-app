import { Component, OnInit, OnChanges, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Delivery, Contact } from '../../domain/model';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-delivery-crud',
  templateUrl: './delivery-crud.component.html',
  styleUrls: ['./delivery-crud.component.css']
})
export class DeliveryCrudComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  model: Delivery;

  @Output()
  eventEmitter = new EventEmitter<string>();

  @ViewChild('crudDelivery') public crudDeliveryModal: ModalDirective;

  private _modalInstance: ModalDirective;

  backButtonPressedModal: boolean = false;
  saveButtonPressedModal: boolean = false;
  isEqualsAdmContact: boolean;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.model) {
      this.crudDeliveryModal.show();
    }
  }

  //Callback para evaluar si al oprimir el boton Cancelar si confirma|cancela
  handleBackButton(action) {
    this.backButtonPressedModal = false;

    if (action == "confirm") {
      this.hide();
  	  this.eventEmitter.emit("close");
    }
  }

  //Callback para evaluar si al oprimir el boton Guardar si confirma|cancela
  handleSaveButton(action) {
    this.saveButtonPressedModal = false;

    if (action == "confirm") {
      if (this.model.id) {
        this.deliveryService.update(this.model).subscribe(res => {
          this.hide();
          this.eventEmitter.emit("confirm");
        }, err => {
          console.log('Hubo un error interno al guardar los datos del Comercio');
        });
      } else {
        this.deliveryService.create(this.model).subscribe(res => {
          this.hide();
          this.eventEmitter.emit("confirm");
        }, err => {
          console.log('Hubo un error interno al guardar los datos del Comercio');
        });
      }
    }
  }

  cloneAdminContact() {
    console.log(`${this.isEqualsAdmContact}`);
    if (this.isEqualsAdmContact) {
      this.model.commercialContact = this.model.admContact;
      this.model.commercialContact.isAdmContact = false;
    } else {
      this.model.commercialContact = new Contact();
    }
    //this.isEqualsAdmContact = !this.isEqualsAdmContact;
  }

  //Click boton cerrar
  close() {
    this.backButtonPressedModal = true;
  }

  //Click boton cancelar
  cancel() {
    this.backButtonPressedModal = true;
  }

  //Click boton guardar
  confirm() {
    this.saveButtonPressedModal = true;
  }

  private hide() {
    this.crudDeliveryModal.hide();
  }

}
