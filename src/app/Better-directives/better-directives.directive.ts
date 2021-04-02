import { Directive, Renderer2,OnInit,ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterDirectives]'
})
export class BetterDirectivesDirective implements OnInit{

  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
  ngOnInit(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
  }
  @HostListener('mouseenter') mousehover(event: MouseEvent){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseout') mouseleave(event: MouseEvent){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
