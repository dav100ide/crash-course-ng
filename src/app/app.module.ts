import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//external modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Internal modules
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Button1Component } from './components/button1/button1.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      Button1Component,
      TasksComponent,
      TaskItemComponent,
      AddTaskComponent,
      AboutComponent,
      NotFoundComponent,
      FooterComponent,
      EditTaskComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule,
      HttpClientModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
