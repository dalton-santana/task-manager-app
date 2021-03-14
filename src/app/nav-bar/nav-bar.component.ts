import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private genericService: GenericService, private router: Router) {}

  signOut() {
    this.genericService.signOut().subscribe(
      (res) => {
        this.router.navigateByUrl('login')
        this.genericService.clearToken();
      },
      (e) => {
        this.router.navigateByUrl('login')
        this.genericService.clearToken();
      }
    );
  }

  ngOnInit(): void {}
}
