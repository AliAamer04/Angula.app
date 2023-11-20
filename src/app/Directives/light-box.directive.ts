import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  @Input('LightBox') highlightColor: string = "yellow";
  @Input() defaultColor: string = "darkblue";

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOVer() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout') onMousOut() {
    this.elemRef.nativeElement.style.border = "3px solid darkblue";
  }

}
