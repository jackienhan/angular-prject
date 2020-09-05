import {Component, OnInit, ViewChild} from '@angular/core';
import {CpcolorDirective} from "../cpcolor.directive";

@Component({
  selector: 'app-cp-color-parent',
  templateUrl: './cp-color-parent.component.html',
  styleUrls: ['./cp-color-parent.component.scss']
})
export class CpColorParentComponent implements OnInit {

  @ViewChild(CpcolorDirective, {static: false})
  private cpColor: CpcolorDirective;
  constructor() { }

  ngOnInit() {
  }
  changeColor(color: string) {
    this.cpColor.change(color);
  }

}
