import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
  public tasks: Array<any> = [];
  currentTask = {
    id: null,
    title: null,
    description: null,
    status: false,
    is_visible: false,
  };

  filterList = {
    is_visible: 'null',
    status: 'null',
  };

  public errors: Array<any> = [];

  constructor(private genericService: GenericService) {}

  getAllTasks() {
    this.genericService.getAll('tasks').subscribe((res) => {
      this.tasks = res;
    });
  }

  submitTask() {
    let data = {
      task: {
        ...this.currentTask,
      },
    };

    if (!this.currentTask.id) {
      this.genericService.additem('tasks', data).subscribe((res) => {
        this.cancelEdit();
        this.getAllTasks();
      });
    } else {
      this.genericService
        .updateItem('tasks', this.currentTask.id, data)
        .subscribe((res) => {
          this.cancelEdit();
          this.getAllTasks();
        });
    }
  }

  deleteTask(task) {
    this.genericService.deleteitem('tasks', task.id).subscribe((res) => {
      this.getAllTasks();
    });
  }

  showTask(task) {
    this.currentTask = task;
  }

  cancelEdit() {
    this.currentTask = {
      id: null,
      title: null,
      description: null,
      status: false,
      is_visible: null,
    };
    this.getAllTasks();
  }

  setTrueTask(task) {
    let data = {
      task: {
        ...task,
        status: true,
      },
    };

    this.genericService.updateItem('tasks', task.id, data).subscribe((res) => {
      this.cancelEdit();
      this.getAllTasks();
    });
  }

  filter() {
    let params = '?';
    params +=
      (this.filterList.is_visible == 'null'
        ? ''
        : this.filterList.is_visible  == 'true'
        ? 'is_visible=1'
        : 'is_visible=0') +
      (this.filterList.status == 'null'
        ? ''
        : this.filterList.status == 'true'
        ? '&status=1'
        : '&status=0');

    console.log(this.filterList.is_visible);
    console.log(this.filterList.status);

    this.genericService.getAll('tasks', params).subscribe((res) => {
      this.tasks = res;
    });
  }

  ngOnInit(): void {
    this.getAllTasks();
  }
}
