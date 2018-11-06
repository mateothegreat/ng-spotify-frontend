import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultAlbumComponent } from './search-result-album.component';

describe('SearchResultAlbumComponent', () => {
  let component: SearchResultAlbumComponent;
  let fixture: ComponentFixture<SearchResultAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
