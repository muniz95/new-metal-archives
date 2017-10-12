import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsCountryComponent } from './bands-country.component';

describe('BandsCountryComponent', () => {
  let component: BandsCountryComponent;
  let fixture: ComponentFixture<BandsCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
