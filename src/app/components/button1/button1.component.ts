import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-button1',
   templateUrl: './button1.component.html',
   styleUrls: ['./button1.component.scss'],
})
export class Button1Component implements OnInit {
   @Input() text!: string;
   @Output() btnClick = new EventEmitter();
   constructor() {}
   ngOnInit(): void {}

   onClick() {
      this.btnClick.emit();
   }
}
