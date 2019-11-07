import { ProfileComponent } from './profile/profile.component';
import { GerenciarNoticiasComponent } from './gerenciar-noticias/gerenciar-noticias.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main';
import { GerenciarVagasComponent } from './gerenciar-vagas/gerenciar-vagas.component';
import { GerenciarCursosComponent } from './gerenciar-cursos/gerenciar-cursos.component';

const dashboardRoutes = [
    {path: 'dashboard', component: DashboardComponent, children : [
        {path: 'main', component: MainComponent},
        {path: 'vagas', component: GerenciarVagasComponent},
        {path: 'cursos', component: GerenciarCursosComponent},
        {path: 'noticias', component: GerenciarNoticiasComponent},
        {path: 'perfil', component: ProfileComponent}
    ]},
    
];

@NgModule({
    imports: [ RouterModule.forChild(dashboardRoutes) ],
    exports: [ RouterModule ]
})
export class DashboardRoutingModule {}