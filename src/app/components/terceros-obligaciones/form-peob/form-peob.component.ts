import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TercerosService } from 'src/app/services/generales/terceros.service';
import { ObligacionService } from 'src/app/services/generales/obligacion.service';

@Component({
  selector: 'app-form-peob',
  templateUrl: './form-peob.component.html',
  styles: []
})
export class FormPeobComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  datos: any[];
  obligaciones: any[];

  constructor(private dataService: TercerosService, private obliService: ObligacionService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.datos = data;
    });

    this.obliService.sendGetRequest().subscribe((data: any[]) => {
      this.obligaciones = data;      
      console.log(this.obligaciones);
    });
  }

  Save() {
    this.save.emit(this.model);
  }
}
