import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarCursosComponent } from './gerenciar-cursos.component';

describe('GerenciarCursosComponent', () => {
  let component: GerenciarCursosComponent;
  let fixture: ComponentFixture<GerenciarCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
