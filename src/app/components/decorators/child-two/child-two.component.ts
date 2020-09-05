import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  @Input()
  studentMsg : string;

  @Input('stdLeader')
  myStdLeader : Student;

  @Output('addNumberEvent')
  addNumEvent = new EventEmitter<number>();

  childTitle = '---Child Two---';
  addNumMsg ='Add Number'
  num1 : '';
  num2 : '';
  constructor() { }

  ngOnInit() {
  }
  addNumber() {
    this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num2));
  }
}
