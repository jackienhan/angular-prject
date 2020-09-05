import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList, TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {WriterComponent} from "../writer/writer.component";
import {MessageDirective} from "../message.directive";

@Component({
  selector: 'app-vc-demo',
  templateUrl: './vc-demo.component.html',
  styleUrls: ['./vc-demo.component.scss']
})
export class VcDemoComponent implements AfterViewInit {


  allWritersVisible = false;
  @ViewChildren('bkWriter')
  public writers1: QueryList<WriterComponent>;

  @ViewChildren(WriterComponent, {read: ElementRef})
  public writers2: QueryList<ElementRef>;

  @ViewChildren(WriterComponent, {read: ViewContainerRef})
  public writers3: QueryList<ViewContainerRef>;

  @ViewChildren(MessageDirective)
  private msgList: QueryList<MessageDirective>;

  @ViewChild('msgTemp', {static: false})
  private msgTempRef: TemplateRef<any>;

  @ViewChildren('pname')
  persons: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('--- @ViewChildren + Component ---');
    this.writers1.changes.subscribe(

      list => {
        list.forEach(writer => console.log(writer.writerName + ' - ' + writer.bookName));
      }
    );
    console.log(this.writers1.length);
    console.log("Result with ElementRef:");
    this.writers2.forEach(el => console.log(el));

    console.log("Result with ViewContainerRef:");
    this.writers3.forEach(vref => console.log(vref));

    console.log('--- @ViewChildren + Directive ---');
    console.log("this.msgList.length: " + this.msgList.length);
    this.msgList.forEach(messageDirective =>
      messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));

    console.log('--- @ViewChildren + ElementRef ---');
    this.persons.forEach(el => console.log(el.nativeElement.innerHTML));
  }
  onShowAllWriters() {
    this.allWritersVisible = (this.allWritersVisible === true) ? false : true;
  }
}
