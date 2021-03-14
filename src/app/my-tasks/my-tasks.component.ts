import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  public tasks: Array<any>;

  constructor(private genericService: GenericService) { }

  ngOnInit(): void {
    this.genericService.getAll("tasks")
    .subscribe(res => {
      this.tasks = res
    })
  }
}
