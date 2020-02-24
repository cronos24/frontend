import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FacturaService } from 'src/app/services/facturacion/factura.service';
import { MediosPagoService } from 'src/app/services/generales/medios-pago.service';
import { MetodosPagoService } from 'src/app/services/generales/metodos-pago.service';

@Component({
  selector: 'app-form-fpag',
  templateUrl: './form-fpag.component.html',
  styles: []
})
export class FormFpagComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  factura: any[];
  medios_pagos: any[];
  metodos_pago: any[];

  constructor(private factService: FacturaService, private mpagService: MediosPagoService, private metpService: MetodosPagoService) { }

  ngOnInit() {

 
    this.factService.sendGetRequest().subscribe((data: any[]) => {
      this.factura = data;
    });

    this.mpagService.sendGetRequest().subscribe((data: any[]) => {
      this.medios_pagos = data;
    });

    this.metpService.sendGetRequest().subscribe((data: any[]) => {
      this.metodos_pago = data;
    });   
  }

 

  Save() {
    this.save.emit(this.model);
  }
}
