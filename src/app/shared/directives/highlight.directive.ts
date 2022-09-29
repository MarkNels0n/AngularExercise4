import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight:string | undefined

  //click mouseenter mouseleave
  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('green')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('blue')
  }

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'orange';
  }

  private highLight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
