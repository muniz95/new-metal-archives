import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipComponent } from './rip.component';

describe('RipComponent', () => {
  let component: RipComponent;
  let fixture: ComponentFixture<RipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
