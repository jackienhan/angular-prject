import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {
  @Input('name') writerName: string;
  @Input('book') bookName: string;

  constructor() { }

  ngOnInit() {
  }

}
