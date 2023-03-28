import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
   selector: 'app-tasks',
   templateUrl: './tasks.component.html',
   styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
   tasks: Task[] = [];
   //utilizzo TaskService (lui chiamata axios) per riempire l'array tasks
   constructor(private taskService: TaskService) {}
   ngOnInit(): void {
      // i subscribe to the observable so i constanlty watch it
      this.taskService.getTasks().subscribe((tasks) => {
         this.tasks = tasks;
      });
   }
}
