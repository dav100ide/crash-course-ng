import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { UiService } from 'src/app/services/ui.service';
@Component({
   selector: 'app-tasks',
   templateUrl: './tasks.component.html',
   styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
   tasks: Task[] = [];
   //utilizzo TaskService (lui chiamata axios) per riempire l'array tasks
   constructor(
      private taskService: TaskService,
      private uiService: UiService
   ) {}
   ngOnInit(): void {
      // i subscribe to the observable so i constanlty watch it
      this.taskService.getTasks().subscribe((tasks) => {
         this.tasks = tasks;
      });
   }
   deleteTask(task: Task) {
      this.taskService.deleteTask(task).subscribe(() => {
         //riassegno tasks, flitrando via la task con id uguale alla task del parametro
         this.tasks = this.tasks.filter((t) => t.id !== task.id);
      });
   }
   toggleReminder(task: Task) {
      // aggiorno l'ui
      task.reminder = !task.reminder;
      //aggiorno il backend, jsonDb  chiamando il servizio task.service.ts
      this.taskService.updateTaskReminder(task).subscribe();
   }

   addTask(task: Task) {
      this.taskService.addTask(task).subscribe((task) => {
         this.tasks.push(task);
      });
   }

   showEditTask = false;
   toggleEditTask(task: Task) {
      this.showEditTask = !this.showEditTask;
   }
}
