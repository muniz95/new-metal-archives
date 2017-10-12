import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestComponent } from './home-latest.component';

describe('HomeLatestComponent', () => {
  let component: HomeLatestComponent;
  let fixture: ComponentFixture<HomeLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
