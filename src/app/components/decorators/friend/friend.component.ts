import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements AfterContentInit {

  @ContentChild('name', {static: false}) nameRef: ElementRef;
  constructor() { }


  get friendName(): String {
    return this.nameRef.nativeElement.innerHTML;
  }

  ngAfterContentInit(): void {
   console.log(this.friendName);
  }

}
