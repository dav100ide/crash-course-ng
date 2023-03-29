import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-button1',
   templateUrl: './button1.component.html',
   styleUrls: ['./button1.component.scss'],
})
export class Button1Component {
   @Input() text!: string;
   @Output() btnClick = new EventEmitter();

   onClick() {
      this.btnClick.emit();
   }
}
