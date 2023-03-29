import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
@Component({
   selector: 'app-add-task',
   templateUrl: './add-task.component.html',
   styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
   @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

   text: string = '';
   day: string = '';
   reminder: boolean = false;

   constructor() {}
   ngOnInit(): void {}
   onSubmit() {
      //validazione dati
      if (!this.text || !this.day) {
         alert('inserire tutti i dati!!');
      }

      const newTask = {
         text: this.text,
         day: this.day,
         reminder: this.reminder,
      };
      //best practise: affido al padre Task di aggiornare il backend
      this.onAddTask.emit(newTask);
      //dopo aver emesso l'evento, reimposto i dati
      this.text = '';
      this.day = '';
      this.reminder = false;
   }
}
