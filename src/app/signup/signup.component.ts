import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from '../services/generic-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {
    email: null,
    password: null,
    confirmation_password: null
  };

  public errors: Array<any> = [];

  constructor(private genericService: GenericService, private router: Router) { }

  
  signUp() {
    this.errors = [];

    let data: any = {
      user: {
        ...this.user,
      },
    };

    this.genericService.signUp(data).subscribe(
      async (res) => {
        localStorage.setItem('token', res.auth_token);
        this.router.navigateByUrl('/home').then(() => {
          location.reload();
        });
      },
      (e) => {
        if(e.error.errors) {
          let errors = e.error.errors
          for (let err in errors) {
            this.errors.push(`${err}: ${errors[err][0]}`);
          }

        }
      }
    );
  }

  ngOnInit(): void {
  }

}
