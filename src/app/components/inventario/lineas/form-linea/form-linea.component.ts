import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-form-linea',
  templateUrl: './form-linea.component.html',
  styles: []
})
export class FormLineaComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}

  Save() {
    this.save.emit(this.model);
  }
}
