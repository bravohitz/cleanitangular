import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningOrderEditFormComponent } from './cleaning-order-edit-form.component';

describe('CleaningOrderEditFormComponent', () => {
  let component: CleaningOrderEditFormComponent;
  let fixture: ComponentFixture<CleaningOrderEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningOrderEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningOrderEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
