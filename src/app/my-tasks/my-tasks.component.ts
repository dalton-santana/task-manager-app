import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  public tasks: Array<any> = []
  currentTask = {
    title: null,
    description: null,
    status: false,
    is_visible: null,
  };
  public errors: Array<any> = []

  constructor(private genericService: GenericService) { }

  
  getAllTasks() {
    this.genericService.getAll("tasks")
    .subscribe(res => {
      this.tasks = res
    })
  }

  addTask() {
    let data = {
      task: {
        ...this.currentTask
      }
    }
    this.genericService.additem("tasks", data)
    .subscribe(res => {
      this.getAllTasks()
    })
  }

  updateTask(task) {
    this.genericService.getAll("tasks")
    .subscribe(res => {
       this.getAllTasks()
    })
  }

  deleteTask(task) {
    this.genericService.deleteitem("tasks", task.id)
    .subscribe(res => {
      this.getAllTasks()
    })
  }

  ngOnInit(): void {
    this.getAllTasks()
  }
}
