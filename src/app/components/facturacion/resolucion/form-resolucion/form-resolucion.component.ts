import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpresaService } from 'src/app/services/generales/empresa.service';

@Component({
  selector: 'app-form-resolucion',
  templateUrl: './form-resolucion.component.html',
  styles: []
})
export class FormResolucionComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  empresas: any[];

  constructor(private dataService: EmpresaService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.empresas = data;
    });
  }

  Save() {
    this.save.emit(this.model);
  }
}
