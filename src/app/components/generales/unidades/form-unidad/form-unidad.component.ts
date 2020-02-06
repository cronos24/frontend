import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-form-unidad',
  templateUrl: './form-unidad.component.html',
  styles: []
})
export class FormUnidadComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}

  Save() {
    this.save.emit(this.model);
  }
}
