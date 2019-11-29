import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-form-vinculacion",
  templateUrl: "./form-vinculacion.component.html",
  styles: []
})
export class FormVinculacionComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}

  Save() {
    this.save.emit(this.model);
  }
}
