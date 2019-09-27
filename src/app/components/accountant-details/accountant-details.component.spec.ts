import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantDetailsComponent } from './accountant-details.component';

describe('AccountantDetailsComponent', () => {
  let component: AccountantDetailsComponent;
  let fixture: ComponentFixture<AccountantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
