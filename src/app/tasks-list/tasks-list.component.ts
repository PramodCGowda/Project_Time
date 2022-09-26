import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

tasksList = [
  {
    taskName: "Eat",
    hours: 1,
    priority: 1,
    important: false,
    isCompleted: true,
    isFavorite: false
  },
  {
    taskName: "Code",
    hours: 4,
    priority: 2,
    important: true,
    isCompleted: false,
    isFavorite: true
  },
  {
    taskName: "Read",
    hours: 2,
    priority: 3,
    important: true,
    isCompleted: false,
    isFavorite: false
  },
  {
    taskName: "Sleep",
    hours: 7,
    priority: 4,
    important: true,
    isCompleted: true,
    isFavorite: true
  }
]

}
