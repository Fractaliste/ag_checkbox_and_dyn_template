import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCheckboxComponent } from './b-checkbox.component';

describe('BCheckboxComponent', () => {
  let component: BCheckboxComponent;
  let fixture: ComponentFixture<BCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
