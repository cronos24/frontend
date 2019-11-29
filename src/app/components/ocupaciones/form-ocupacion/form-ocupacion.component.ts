import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-form-ocupacion",
  templateUrl: "./form-ocupacion.component.html",
  styles: []
})
export class FormOcupacionComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}

  Save() {
    this.save.emit(this.model);
  }
}
