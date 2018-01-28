import { Component, OnInit, OnChanges, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  show: boolean;

  @Input()
  title: string;

  @Input()
  content: string;

  @Output()
  eventEmitter = new EventEmitter<string>();

  @ViewChild('okOnly') public okOnlyModal: ModalDirective;
  @ViewChild('okCancel') public okCancelModal: ModalDirective;

  private _modalInstance: ModalDirective;

  constructor() {
  	//console.log('modal instance');
  }

  ngOnInit() {}

  ngOnChanges() {
    if (this.show) {
      switch (this.type) {
        case "okOnly":
          this.okOnlyModal.show();
          break;
        case "okCancel":
          this.okCancelModal.show();
          break;
        default:
          break;
      }
    }
  }

  close() {
    this.hide();
  	this.eventEmitter.emit("close");
  }

  cancel() {
    this.hide();
  	this.eventEmitter.emit("cancel");
  }

  confirm() {
    this.hide();
  	this.eventEmitter.emit("confirm");
  }

  private hide() {
    switch (this.type) {
      case "okOnly":
        this.okOnlyModal.hide();
        break;
      case "okCancel":
        this.okCancelModal.hide();
        break;
      default:
        break;
    }
  }

}
