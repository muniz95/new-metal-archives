import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandInfoComponent } from './band-info.component';

describe('BandInfoComponent', () => {
  let component: BandInfoComponent;
  let fixture: ComponentFixture<BandInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
