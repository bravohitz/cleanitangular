import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningOrderFormComponent } from './cleaning-order-form.component';

describe('CleaningOrderFormComponent', () => {
  let component: CleaningOrderFormComponent;
  let fixture: ComponentFixture<CleaningOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
