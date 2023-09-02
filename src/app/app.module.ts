import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { TodoComponent } from './todo/todo.component';
import { AddTaskComponent } from './todo/add-task/add-task.component';
import { TaskListComponent } from './todo/task-list/task-list.component';
import { ToDoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
