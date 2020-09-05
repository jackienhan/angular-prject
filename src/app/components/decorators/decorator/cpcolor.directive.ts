import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCpcolor]'
})
export class CpcolorDirective implements AfterViewInit{

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = 'red';
  }

  change(changedColor: String) {
    console.log(changedColor);
    this.elRef.nativeElement.style.color = changedColor;
  }
}
