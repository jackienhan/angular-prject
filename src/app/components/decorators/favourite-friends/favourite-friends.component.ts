import {AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'app-favourite-friends',
  templateUrl: './favourite-friends.component.html',
  styleUrls: ['./favourite-friends.component.scss']
})
export class FavouriteFriendsComponent implements AfterContentInit {

  @ContentChildren('name', {descendants: false}) allFriendsRef: QueryList<ElementRef>;
  constructor() { }

  get allFriends(): string {
    return this.allFriendsRef ? this.allFriendsRef.map(f=> f.nativeElement.innerHTML).join(',') : '';
  }

  ngAfterContentInit(): void {
  }

}
