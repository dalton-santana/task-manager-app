import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GenericService } from '../services/generic-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private genericService: GenericService, private router: Router) { }
  private isAuthenticated: boolean = false;

  canActivate() {
    if(this.genericService.getToken()){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}