import {Component, OnInit, ViewChild} from '@angular/core';
import {NumberComponent} from "../number/number.component";

@Component({
  selector: 'app-number-component',
  templateUrl: './number-component.component.html',
  styleUrls: ['./number-component.component.scss']
})
export class NumberComponentComponent implements OnInit {

  @ViewChild(NumberComponent, {static: false})
  private numberComponent!: NumberComponent;
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }
}
