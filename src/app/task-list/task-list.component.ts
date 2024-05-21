import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = signal([
    { id : 1, title : 'Task 1' , priority : 'high'},
    { id : 2, title : 'Task 2' , priority : 'Medium'},
    { id : 3, title : 'Task 3' , priority : 'low'},
  ])

  urgetTask = computed(() => this.tasks().filter((task) => task.priority === "high"));
}
