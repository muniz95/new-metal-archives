import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsByAlphaComponent } from './reviews-by-alpha.component';

describe('ReviewsByAlphaComponent', () => {
  let component: ReviewsByAlphaComponent;
  let fixture: ComponentFixture<ReviewsByAlphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsByAlphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsByAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
