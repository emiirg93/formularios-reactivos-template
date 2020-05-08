import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { PERSONAS } from './persona.mock';
import { Persona } from './persona.model';
import { Venta } from './venta.model';
import { VENTA } from './venta.mock';
import { InformacionVenta } from './informacionVenta.model';

@Component({
  selector: 'app-formulario-fenix',
  templateUrl: './formulario-fenix.component.html',
  styleUrls: ['./formulario-fenix.component.css']
})
export class FormularioFenixComponent implements OnInit {

  venta: Venta = VENTA;
  formVenta: FormGroup;
  personas: Persona[] = PERSONAS;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.venta) {
      this.createFormEdit();
      this.setForm();
    } else {
      this.createFormCreate();
    }
  }

  createFormCreate() {
    this.formVenta = this.fb.group({
      infoVentaVendedor: this.fb.array([
        this.fb.group({
          persona: [''],
          porcentaje: ['']
        })
      ]),
      infoventaComision: this.fb.array([
        this.fb.group({
          persona: [''],
          porcentaje: ['']
        })
      ]),
      vigenciaDesde: ['', Validators.required],
      vigenciaHasta: ['', Validators.required]
    });
  }

  createFormEdit() {
    this.formVenta = this.fb.group({
      infoVentaVendedor: this.fb.array([]),
      infoventaComision: this.fb.array([]),
      vigenciaDesde: ['', Validators.required],
      vigenciaHasta: ['', Validators.required]
    });
  }

  get GetInfoVentaVendedor() {
    return this.formVenta.get('infoVentaVendedor') as FormArray;
  }
  get GetInfoVentaComision() {
    return this.formVenta.get('infoventaComision') as FormArray;
  }
  get GetVigenciaDesde() {
    return this.formVenta.get('vigenciaDesde');
  }
  get GetVigenciaHasta() {
    return this.formVenta.get('vigenciaHasta');
  }

  agregarVendedor(obj?: InformacionVenta) {
    this.GetInfoVentaVendedor.push(this.fb.group({
      persona: [obj ? obj.persona.idPersona : ''],
      porcentaje: [obj ? obj.porcentaje : '']
    }));
  }

  agregarComision(obj?: InformacionVenta) {
    this.GetInfoVentaComision.push(this.fb.group({
      persona: [obj ? obj.persona.idPersona : ''],
      porcentaje: [obj ? obj.porcentaje : '']
    }));
  }

  eliminarVendedor(index: number) {
    this.GetInfoVentaVendedor.removeAt(index);
  }

  eliminarComision(index: number) {
    this.GetInfoVentaComision.removeAt(index);
  }

  setForm() {
    for (const item of this.venta.vendedor) {
      this.agregarVendedor(item);
    }
    for (const item of this.venta.comision) {
      this.agregarComision(item);
    }

    this.GetVigenciaDesde.setValue(this.venta.vigenciaDesde);
    this.GetVigenciaHasta.setValue(this.venta.vigenciaHasta);
  }
}
