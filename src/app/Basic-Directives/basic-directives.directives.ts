import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicDirectives]'
})
export class AppBasicDirectives implements OnInit{
    constructor(private elementRef : ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
}