import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styles: [],

})
export class FormEmpresaComponent implements OnInit {
  @Input('model') model: any;
  @Output() save = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() {
  }

  Save(){
     this.save.emit(this.model);
  }

}
