import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCrudComponent } from './delivery-crud.component';

describe('DeliveryCrudComponent', () => {
  let component: DeliveryCrudComponent;
  let fixture: ComponentFixture<DeliveryCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
