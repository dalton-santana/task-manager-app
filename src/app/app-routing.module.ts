import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
  canActivate: [AuthGuardService] },
  { path: 'login', component: SigninComponent },
  {
    path: 'my-tasks',
    component: MyTasksComponent,
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
