import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';
import { Delivery, SearchCondition, SearchFilter } from '../domain/model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  selectedDelivery: Delivery;
  deliveries: Array<Delivery>;
  searchConditions: Array<SearchCondition>;

  actualFilter: SearchFilter;

  backButtonPressedModal: boolean;
  saveButtonPressedModal: boolean;

  errorMessage: string;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.searchConditions = new Array<SearchCondition>();
    this.searchConditions.push(new SearchCondition("Nombre", "name"));    
    this.searchConditions.push(new SearchCondition("Telefono", "phoneNumber"));
    this.searchConditions.push(new SearchCondition("Direccion", "address"));
    this.actualFilter = undefined;
  }

  searchDeliveries(filter: SearchFilter) {
  	this.deliveryService.findDeliveries(filter).subscribe(response => {
	   	this.deliveries = response;
    });
  }

  edit(delivery: Delivery) {
  	this.selectedDelivery = delivery;
  }

  back() {
    this.backButtonPressedModal = true;
  }

  save() {
    this.saveButtonPressedModal = true;
  }

  handleBackButton(action: string) {
    if (action == "confirm") {
      this.selectedDelivery = undefined;
      this.searchDeliveries(this.actualFilter);
    }

    this.backButtonPressedModal = false;
  }

  handleSaveButton(action: string) {
    this.saveButtonPressedModal = false;
    
    if (action == "confirm") {
      this.deliveryService.update(this.selectedDelivery).subscribe(res => {
        this.selectedDelivery = undefined;
      }, err => {
        this.errorMessage = 'Hubo un error interno al guardar los datos del Comercio';
      });
    } else {
      this.selectedDelivery = undefined;
    }
  }

}
