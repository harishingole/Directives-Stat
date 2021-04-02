import { Directive, Renderer2,OnInit,ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirectives]'
})
export class BetterDirectivesDirective implements OnInit{

  
  @Input() defaultColor: string = "transparent";
  @Input('appBetterDirectives') highlightColor: string = "blue";
  @HostBinding('style.backgroundColor') backgroundColor:string;
  
  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }

  ngOnInit(){
    this.backgroundColor =  this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
  }
  @HostListener('mouseenter') mousehover(event: MouseEvent){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseout') mouseleave(event: MouseEvent){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
