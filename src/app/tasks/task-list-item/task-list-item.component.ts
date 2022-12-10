import { TaskService } from './../shared/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task!: Task;

  constructor(private taskSerivce: TaskService) { }

  ngOnInit() {
  }

  remove(task: Task) {
    this.taskSerivce.delete(task.id);
  }

  onCompletedCheckChange(task: Task) {
    this.taskSerivce.save(task);
  }
}
