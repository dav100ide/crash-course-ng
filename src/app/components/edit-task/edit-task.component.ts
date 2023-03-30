import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-edit-task',
   templateUrl: './edit-task.component.html',
   styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
   showEditTask: boolean = false;

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
