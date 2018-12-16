import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashListComponent } from './cash-list.component';

describe('CashListComponent', () => {
  let component: CashListComponent;
  let fixture: ComponentFixture<CashListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
