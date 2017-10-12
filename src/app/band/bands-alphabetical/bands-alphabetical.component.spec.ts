import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsAlphabeticalComponent } from './bands-alphabetical.component';

describe('BandsAlphabeticalComponent', () => {
  let component: BandsAlphabeticalComponent;
  let fixture: ComponentFixture<BandsAlphabeticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsAlphabeticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsAlphabeticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
