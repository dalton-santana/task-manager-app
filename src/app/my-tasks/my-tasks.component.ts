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
    id: null,
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

  submitTask() {
    let data = {
      task: {
        ...this.currentTask
      }
    }

    if(!this.currentTask.id) {
      this.genericService.additem("tasks", data)
      .subscribe(res => {
        this.cancelEdit()
        this.getAllTasks()
      })
    } else [
      this.genericService.updateItem("tasks", this.currentTask.id, data)
      .subscribe(res => {
        this.cancelEdit()
        this.getAllTasks()
      })

    ]
  }


  deleteTask(task) {
    this.genericService.deleteitem("tasks", task.id)
    .subscribe(res => {
      this.getAllTasks()
    })
  }

  showTask(task) {
    this.currentTask = task
  }

  cancelEdit() {
    this.currentTask = {
      id: null,
      title: null,
      description: null,
      status: false,
      is_visible: null,
    };
    this.getAllTasks()
  }

  ngOnInit(): void {
    this.getAllTasks()
  }
}
