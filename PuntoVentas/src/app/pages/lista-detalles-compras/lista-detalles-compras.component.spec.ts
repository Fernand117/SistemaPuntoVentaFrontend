import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetallesComprasComponent } from './lista-detalles-compras.component';

describe('ListaDetallesComprasComponent', () => {
  let component: ListaDetallesComprasComponent;
  let fixture: ComponentFixture<ListaDetallesComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDetallesComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDetallesComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
