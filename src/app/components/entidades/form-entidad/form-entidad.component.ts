import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-form-entidad",
  templateUrl: "./form-entidad.component.html",
  styles: []
})
export class FormEntidadComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}

  Save() {
    this.save.emit(this.model);
  }
}
