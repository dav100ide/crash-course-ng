import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
   { path: '', component: TasksComponent }, //stringa vuota pk è l'index (homepage)
   { path: 'about', component: AboutComponent },
   { path: '**', component: NotFoundComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
   exports: [RouterModule],
})
export class AppRoutingModule {}
