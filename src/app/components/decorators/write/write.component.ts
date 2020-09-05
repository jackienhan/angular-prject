import {Component, ContentChild, OnInit} from '@angular/core';
import {BookDirective} from "../decorator/book.directive";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  @ContentChild(BookDirective, {static: false}) book: BookDirective;
  writerName = 'Mahesh';
  constructor() { }

  ngOnInit() {
  }

}
