import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: `[phoneFormat]`,
})
export class PhoneFormatDirective {
  //   myEle: any;

  //   constructor(elementRef: ElementRef) {
  //     this.myEle;
  //   }

  constructor(private eleRef: ElementRef) {}

  @HostListener('blur') onBlur() {
    let eleVal: string = this.eleRef.nativeElement.value;

    if (eleVal.includes(`(`)) {
      return;
    }

    this.eleRef.nativeElement.value = `(${eleVal.substr(0, 3)}) ${eleVal.substr(
      3,
      3
    )}-${eleVal.substr(6)}`;
  }
}
