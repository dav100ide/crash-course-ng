import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [{ path: '/pippo', component: TasksComponent }];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
