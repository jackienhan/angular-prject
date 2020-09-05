import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  message:string ='';
  count:number = 0;
  constructor() { }

  ngOnInit() {
  }
  increaseByOne() {
    this.count = this.count + 1;
    this.message = "Counter: " + this.count;
  }
  decreaseByOne() {
    this.count = this.count - 1;
    this.message = "Counter: " + this.count;
  }
}
