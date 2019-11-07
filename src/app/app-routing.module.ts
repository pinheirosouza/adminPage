import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const approutes: Routes = [
  { path: 'dashboard',
      loadChildren:'./dashboard/dashboard.module#DashboardModule',
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(approutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
