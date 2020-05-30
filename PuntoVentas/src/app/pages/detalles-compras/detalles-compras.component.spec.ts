import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesComprasComponent } from './detalles-compras.component';

describe('DetallesComprasComponent', () => {
  let component: DetallesComprasComponent;
  let fixture: ComponentFixture<DetallesComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
