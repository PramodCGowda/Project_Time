import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-task-list",
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() task: any;

  isCompleted(): boolean {
    return true;
  }

  @Output() complete =  new EventEmitter();

  onComplete() {
    console.log('Task Completed');
    this.complete.emit(this.task);
  }
}
