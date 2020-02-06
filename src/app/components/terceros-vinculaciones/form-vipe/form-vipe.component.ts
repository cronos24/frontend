import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TercerosService } from 'src/app/services/generales/terceros.service';
import { VinculacionService } from 'src/app/services/generales/vinculacion.service';

@Component({
  selector: 'app-form-vipe',
  templateUrl: './form-vipe.component.html',
  styles: []
})
export class FormVipeComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  datos: any[];
  vinculaciones: any[];

  constructor(private dataService: TercerosService, private vincService: VinculacionService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.datos = data;
    });

    this.vincService.sendGetRequest().subscribe((data: any[]) => {
      this.vinculaciones = data;
    });
  }

  Save() {
    this.save.emit(this.model);
  }

}
