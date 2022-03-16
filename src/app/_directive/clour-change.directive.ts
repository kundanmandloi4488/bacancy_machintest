import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClourChange]'
})
export class ClourChangeDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("black");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
