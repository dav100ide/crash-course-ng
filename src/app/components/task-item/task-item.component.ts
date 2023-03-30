import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

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

   @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
   @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
   @Output() onPenClick: EventEmitter<Task> = new EventEmitter();

   faTimes = faTimes;
   faPen = faPen;

   constructor() {}
   ngOnInit(): void {}
   OnDelete(task: Task) {
      //al click emitto al padre, passandogli task
      this.onDeleteTask.emit(task);
   }

   OnToggle(task: Task) {
      this.onToggleReminder.emit(task);
   }

   OnPenClick(task: Task) {
      this.onPenClick.emit(task);
   }
}
