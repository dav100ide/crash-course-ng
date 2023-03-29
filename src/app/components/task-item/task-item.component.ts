import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'app-task-item',
   templateUrl: './task-item.component.html',
   styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
   @Input() task: Task = {
      id: 0,
      text: 'text di default in task-item.components.ts',
      day: 'giorno default',
      reminder: false,
   };
   faTimes = faTimes;
   constructor() {}
   ngOnInit(): void {}
   OnDelete() {
      console.log('on delete');
   }
}
