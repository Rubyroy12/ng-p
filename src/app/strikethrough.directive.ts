import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textdecoration = 'line-through';
  }

}
