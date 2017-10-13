import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsGenreComponent } from './bands-genre.component';

describe('BandsGenreComponent', () => {
  let component: BandsGenreComponent;
  let fixture: ComponentFixture<BandsGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
