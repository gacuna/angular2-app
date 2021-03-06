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

  addButtonPressed: boolean;
  deleteButtonPressed: boolean;

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

  add() {
  	this.selectedDelivery = new Delivery();
  }

  edit(delivery: Delivery) {
  	this.selectedDelivery = delivery;
  }

  delete(delivery: Delivery) {
    this.selectedDelivery = delivery;
    this.deleteButtonPressed = true;
  }

  handleAction(action: string) {
    console.log(`delivery action ${action}`);

    if (action == "confirm") {
      this.selectedDelivery = undefined;
      this.searchDeliveries(this.actualFilter);
    }
  }

  private handleDeleteButton(action: string) {
    this.deleteButtonPressed = false;

    if (action == "confirm") {
      this.deliveryService.delete(this.selectedDelivery).subscribe(res => {
        this.searchDeliveries(this.actualFilter);
      })
    }
  }

}
