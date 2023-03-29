import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Button1Component } from './components/button1/button1.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
//extern modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      Button1Component,
      TasksComponent,
      TaskItemComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
