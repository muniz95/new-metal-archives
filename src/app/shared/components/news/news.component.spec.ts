import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNewsComponent } from './news.component';

describe('SharedNewsComponent', () => {
  let component: SharedNewsComponent;
  let fixture: ComponentFixture<SharedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
