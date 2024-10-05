import { Directive, Input, SimpleChanges, Renderer2, ElementRef } from '@angular/core';
import { DIRECTIVE_ACTION } from '../models/directive-action';

@Directive({
  selector: '[appCort]',
  standalone: true
})
export class CortDirective {


  @Input() directiveAction: DIRECTIVE_ACTION | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const newVal = changes['currentValue'];
  }

  private applyDIRECTIVE_ACTION() {
    // Clear existing styles
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');

    // Apply style based on the enum value
    switch (this.directiveAction) {
      case DIRECTIVE_ACTION.bold:
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
        break;
      case DIRECTIVE_ACTION.highlight:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
        break;
      case DIRECTIVE_ACTION.underline:
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
        break;
      default:
        break;
    }
  }

}
