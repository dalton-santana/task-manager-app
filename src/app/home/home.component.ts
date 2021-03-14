import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tasks: Array<any>;

  constructor(private genericService: GenericService) { }

  ngOnInit(): void {
    this.genericService.getAll("all_public_tasks")
    .subscribe(res => {
      this.tasks = res
    })
  }


}
