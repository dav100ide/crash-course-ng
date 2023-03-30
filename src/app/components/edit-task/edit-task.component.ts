import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-edit-task',
   templateUrl: './edit-task.component.html',
   styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
   showEditTask: boolean = false;

   ngOnInit(): void {}
}
