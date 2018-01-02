import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandDiscographyComponent } from './band-discography.component';

describe('BandDiscographyComponent', () => {
  let component: BandDiscographyComponent;
  let fixture: ComponentFixture<BandDiscographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandDiscographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandDiscographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
