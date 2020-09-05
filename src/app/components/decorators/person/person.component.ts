import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  latestBook = true;
  showAllBook = false;
  homeTown = true;
  bestFriend = true;
  showAllFriend = false;
  constructor() { }

  ngOnInit() {
  }

  onChangeBook() {
    this.latestBook = (this.latestBook === true)? false : true;
  }


  onShowAllBooks() {
    this.showAllBook = (this.showAllBook === true)? false : true;
  }


  onChangeCity() {
    this.homeTown = (this.homeTown === true)? false : true;
  }


  onChangeFriend() {
    this.bestFriend = (this.bestFriend === true)? false : true;
  }


  onShowAllFriends() {
    this.showAllFriend = (this.showAllFriend === true)? false : true;
  }
}
