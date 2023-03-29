import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
   { path: '', component: TasksComponent }, //stringa vuota pk è l'index (homepage)
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
   exports: [RouterModule],
})
export class AppRoutingModule {}
