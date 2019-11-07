import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './dashboard/main';
import { LoginComponent } from './login';
import { AuthGuard } from './auth/_helpers';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent /*, canActivate: [AuthGuard]*/ },
    { path: '', component: LoginComponent },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);