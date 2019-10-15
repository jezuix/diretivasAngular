import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseEnter() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', ''
    // );
    this.backgroundColor = '';
  }

  //@HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.background') get setColor() {
    //código extra;
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { }

}
