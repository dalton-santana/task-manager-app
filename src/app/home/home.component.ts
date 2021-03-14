import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tasks: Array<any>;

  filterList = {
    status: 'null',
  };

  constructor(private genericService: GenericService) {}

  filter() {
    let params = '?';
    params +=
      (this.filterList.status == 'null'
        ? ''
        : this.filterList.status == 'true'
        ? 'status=1'
        : 'status=0');


    this.genericService.getAll('all_public_tasks', params).subscribe((res) => {
      this.tasks = res;
    });
  }

  ngOnInit() {
    this.genericService.getAll('all_public_tasks').subscribe((res) => {
      this.tasks = res;
    });
  }
}
