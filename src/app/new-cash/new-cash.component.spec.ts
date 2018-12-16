import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCashComponent } from './new-cash.component';

describe('NewCashComponent', () => {
  let component: NewCashComponent;
  let fixture: ComponentFixture<NewCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
