import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsCountryComponent } from './labels-country.component';

describe('LabelsCountryComponent', () => {
  let component: LabelsCountryComponent;
  let fixture: ComponentFixture<LabelsCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
