import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteFriendsComponent } from './favourite-friends.component';

describe('FavouriteFriendsComponent', () => {
  let component: FavouriteFriendsComponent;
  let fixture: ComponentFixture<FavouriteFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
