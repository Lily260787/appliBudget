import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedBalanceComponent } from './estimated-balance.component';

describe('EstimatedBalanceComponent', () => {
  let component: EstimatedBalanceComponent;
  let fixture: ComponentFixture<EstimatedBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
