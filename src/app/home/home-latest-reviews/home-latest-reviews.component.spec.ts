import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestReviewsComponent } from './home-latest-reviews.component';

describe('HomeLatestReviewsComponent', () => {
  let component: HomeLatestReviewsComponent;
  let fixture: ComponentFixture<HomeLatestReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLatestReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLatestReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
