import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: string[] = [];
  @Output() taskDeleted = new EventEmitter<string>();

  deleteTask(task: string) {
    this.taskDeleted.emit(task);
  }
}


