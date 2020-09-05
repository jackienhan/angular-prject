import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  @Input()
  ctMsg : string;

  @Input('ctArray')
  myctArray : Array<string>

  @Input('studentAddMsg')
  addMsg : string;

  @Output('addStudentEvent')
  addStdEvent = new EventEmitter<Student>();

  @Output()
  sendMsgEvent = new EventEmitter<string>();

  @Output() name = new EventEmitter<string>();

  student = new Student();
  childTitle = '---Child One---';
  message = 'Send Message'
  msg : string;
  n: string;
  constructor() { }

  ngOnInit() {
  }
  addStudent() {
    this.addStdEvent.emit(this.student);
  }

  addName() {
    this.n = 'java'
    this.name.emit(this.n);
  }
  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }
}
