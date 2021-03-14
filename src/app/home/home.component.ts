import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tasks: Array<any>;

  filterList = {
    is_visible: 'false',
    status: 'false',
  };

  constructor(private genericService: GenericService) { }

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

    this.genericService.getAll('all_public_tasks', params).subscribe((res) => {
      this.tasks = res;
    });
  }

  ngOnInit(): void {
    this.genericService.getAll("all_public_tasks")
    .subscribe(res => {
      this.tasks = res
    })
  }


}
