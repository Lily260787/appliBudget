import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureItemsComponent } from './expenditure-items.component';

describe('ExpenditureItemsComponent', () => {
  let component: ExpenditureItemsComponent;
  let fixture: ComponentFixture<ExpenditureItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
