import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsAlphabeticalComponent } from './labels-alphabetical.component';

describe('LabelsAlphabeticalComponent', () => {
  let component: LabelsAlphabeticalComponent;
  let fixture: ComponentFixture<LabelsAlphabeticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsAlphabeticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsAlphabeticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
