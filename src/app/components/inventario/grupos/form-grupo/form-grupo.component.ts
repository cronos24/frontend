import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from 'src/app/services/inventario/categoria.service';

@Component({
  selector: 'app-form-grupo',
  templateUrl: './form-grupo.component.html',
  styles: []
})
export class FormGrupoComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  categorias: any[];

  constructor(private dataService: CategoriaService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.categorias = data;
    });
  }

  Save() {
    this.save.emit(this.model);
  }
}
