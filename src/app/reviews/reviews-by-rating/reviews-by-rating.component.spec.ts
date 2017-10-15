import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsByRatingComponent } from './reviews-by-rating.component';

describe('ReviewsByRatingComponent', () => {
  let component: ReviewsByRatingComponent;
  let fixture: ComponentFixture<ReviewsByRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsByRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsByRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
