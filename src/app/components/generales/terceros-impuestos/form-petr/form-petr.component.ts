import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TercerosService } from 'src/app/services/generales/terceros.service';
import { ImpuestoService } from 'src/app/services/generales/impuesto.service';

@Component({
  selector: 'app-form-petr',
  templateUrl: './form-petr.component.html',
  styles: []
})
export class FormPetrComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  datos: any[];
  impuestos: any[];

  constructor(private dataService: TercerosService, private impuService: ImpuestoService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.datos = data;
    });

    this.impuService.sendGetRequest().subscribe((data: any[]) => {
      this.impuestos = data;      
    });
  }

  Save() {
    this.save.emit(this.model);
  }

}
