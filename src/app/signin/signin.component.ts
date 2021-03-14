import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user = {
    email: null,
    password: null,
  };
  public errors: Array<any> = []

  constructor(private genericService: GenericService,  private router: Router) {}

  signIn() {
    this.errors = []

    let data: any = {
      session: {
        ...this.user,
      }
    };

    this.genericService.signIn(data).subscribe(
      async (res) => {
        localStorage.setItem('token', res.auth_token)
        this.router.navigateByUrl("/")
      },
      (e) => {
          this.errors.push(e.error.erros)
      }
    );
  }

  ngOnInit(): void {}
}
