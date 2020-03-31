import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRemisionComponent } from './detalles-remision.component';

describe('DetallesRemisionComponent', () => {
  let component: DetallesRemisionComponent;
  let fixture: ComponentFixture<DetallesRemisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesRemisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesRemisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
