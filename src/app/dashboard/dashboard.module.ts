import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './../components/nav/nav.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent} from './dashboard.component';
import { MainComponent } from './main/main.component';
import { GerenciarVagasComponent } from './gerenciar-vagas/gerenciar-vagas.component';
import { GerenciarCursosComponent } from './gerenciar-cursos/gerenciar-cursos.component';
import { GerenciarNoticiasComponent } from './gerenciar-noticias/gerenciar-noticias.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [ 
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule, LayoutModule, MatSidenavModule, MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule 
  ],
  exports: [],
  declarations: [ 
    DashboardComponent,
    MainComponent,
    GerenciarVagasComponent,
    GerenciarCursosComponent,
    GerenciarNoticiasComponent,
    ProfileComponent,
    NavComponent
  ],
  providers: [],
})
export class DashboardModule {}