import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'my-tasks', component: MyTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
