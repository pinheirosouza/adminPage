import { Component,ViewEncapsulation} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { navItens } from 'src/app/shared/nav-itens';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class NavComponent {

  itens: navItens[] = [
    {
      name: 'dashboard',
      icon: 'fa fa-desktop',
      link: "/dashboard/main",
    },
    {
      name: 'gerenciar vagas',
      icon: 'fa fa-users',
      link: '/dashboard/vagas',
    },
    {
      name: 'gerenciar cursos',
      icon: 'fas fa-chalkboard-teacher',
      link: "/dashboard/cursos",
    },
    {
      name: 'gerenciar notícias',
      icon: 'far fa-newspaper',
      link: "/dashboard/noticias",
    },
    {
      name: 'perfil',
      icon: 'fas fa-user-tie',
      link: "/dashboard/perfil",
    },
    {
      name: 'sair',
      icon: 'fas fa-sign-out-alt',
      link: "#",
    },    
   ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  public slectedItemStyle = {
    backgroundColor: 'red'
   };

}


