import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LineaService } from 'src/app/services/inventario/linea.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styles: []
})
export class FormCategoriaComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  lineas: any[];

  constructor(private dataService: LineaService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.lineas = data;
    });
  }

  Save() {
    this.save.emit(this.model);
  }
}
