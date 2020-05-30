import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasAdminComponent } from './compras-admin.component';

describe('ComprasAdminComponent', () => {
  let component: ComprasAdminComponent;
  let fixture: ComponentFixture<ComprasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
