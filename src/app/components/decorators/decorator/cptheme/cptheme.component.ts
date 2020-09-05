import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cptheme',
  templateUrl: './cptheme.component.html',
  styleUrls: ['./cptheme.component.scss']
})
export class CpthemeComponent implements AfterViewInit {

  @ViewChild('name', {static: false})
  private elName : ElementRef;
  @ViewChild('city', {static: false})
  private elCity : ElementRef;

  ngAfterViewInit(): void {
    this.elName.nativeElement.style.backgroundColor = 'cyan';
    this.elName.nativeElement.style.color = 'red';
    this.elCity.nativeElement.style.backgroundColor = 'cyan';
    this.elCity.nativeElement.style.color = 'red';
  }

  constructor() { }

  ngOnInit() {
  }

}
