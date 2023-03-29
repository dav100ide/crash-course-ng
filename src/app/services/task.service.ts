import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//fake api import
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
//'real' api using JSON Server of npm
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
   providedIn: 'root',
})
export class TaskService {
   private apiUrl = 'http://localhost:3000/tasks';
   constructor(private jsonDb: HttpClient) {}

   getTasks(): Observable<Task[]> {
      // const tasks = of(TASKS);
      // //un array di task observable
      // return tasks;

      return this.jsonDb.get<Task[]>(this.apiUrl);
      //HttpClient returns automatically an observable
   }
}
