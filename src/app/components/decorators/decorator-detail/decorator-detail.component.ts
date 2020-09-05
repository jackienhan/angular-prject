import { Component, OnInit } from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-decorator-detail',
  templateUrl: './decorator-detail.component.html',
  styleUrls: ['./decorator-detail.component.scss']
})
export class DecoratorDetailComponent implements OnInit {
  parentTitle = 'Parent Component';

  //Property for child component one
  cityMsg = 'Indian City Names';
  cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  //Property for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Narendra', 'Modi');

  //Property used in parent
  stdFullName = '';
  sum = '';
  msg = '';

  constructor() { }

  ngOnInit() {
  }
  saveData(std) {
    console.log(std);
    this.stdFullName = std.fname + ' ' + std.lname ;
  }
  printSum(res) {
    this.sum = res;
  }
  printMsg(msg) {
    this.msg = msg;
  }
  addName(n) {
    console.log(n);
  }
}
