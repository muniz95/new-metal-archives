import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsByDateComponent } from './reviews-by-date.component';

describe('ReviewsByDateComponent', () => {
  let component: ReviewsByDateComponent;
  let fixture: ComponentFixture<ReviewsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
