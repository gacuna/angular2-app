import { Component, OnInit, OnChanges, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-delivery-crud',
  templateUrl: './delivery-crud.component.html',
  styleUrls: ['./delivery-crud.component.css']
})
export class DeliveryCrudComponent implements OnInit {

  @Input()
  show: boolean;

  @Input()
  title: string;

  @Output()
  eventEmitter = new EventEmitter<string>();

  @ViewChild('crudDelivery') public crudDeliveryModal: ModalDirective;

  private _modalInstance: ModalDirective;

  backButtonPressedModal: boolean = false;

  saveButtonPressedModal: boolean = false;

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    if (this.show) {
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
      this.hide();
      this.eventEmitter.emit("confirm");
    }
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
