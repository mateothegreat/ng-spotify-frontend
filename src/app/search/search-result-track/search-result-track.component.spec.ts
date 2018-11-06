import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTrackComponent } from './search-result-track.component';

describe('SearchResultTrackComponent', () => {
  let component: SearchResultTrackComponent;
  let fixture: ComponentFixture<SearchResultTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
