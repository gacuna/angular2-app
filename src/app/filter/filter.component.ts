import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchFilter, SearchCondition } from '../domain/model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filter: SearchFilter;

  @Input()
  searchConditions: Array<SearchCondition>;

  @Output()
  filterEmitter: EventEmitter<SearchFilter> = new EventEmitter<SearchFilter>();

  constructor() { }

  ngOnInit() {
    if (!this.filter) {
      this.filter = new SearchFilter();
      this.filter.label = this.searchConditions[0].description;
      this.filter.labelValue = this.searchConditions[0].entityPropertyName;
    }
  	
  	this.changeFilter();
  }

  changeFilter() {
  	this.filterEmitter.emit(this.filter);
  }

  setCondition(condition: SearchCondition) {
    this.filter.label = condition.description;
  	this.filter.labelValue = condition.entityPropertyName;
  }

  handleKeyDown(event: any) {
    if (event.keyCode === 13) {
      this.changeFilter();
    }
  }

}