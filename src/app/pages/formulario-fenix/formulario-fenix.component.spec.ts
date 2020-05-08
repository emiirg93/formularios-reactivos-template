import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFenixComponent } from './formulario-fenix.component';

describe('FormularioFenixComponent', () => {
  let component: FormularioFenixComponent;
  let fixture: ComponentFixture<FormularioFenixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFenixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
