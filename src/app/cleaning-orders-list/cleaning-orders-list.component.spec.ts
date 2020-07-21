import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningOrdersListComponent } from './cleaning-orders-list.component';

describe('CleaningOrdersListComponent', () => {
  let component: CleaningOrdersListComponent;
  let fixture: ComponentFixture<CleaningOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
