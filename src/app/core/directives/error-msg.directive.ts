import { Directive } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]',
  standalone: true
})
export class ErrorMsgDirective {

  constructor() { }

}
