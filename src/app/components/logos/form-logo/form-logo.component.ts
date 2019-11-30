import { EmpresaService } from 'src/app/services/empresa.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-form-logo",
  templateUrl: "./form-logo.component.html",
  styles: []
})
export class FormLogoComponent implements OnInit {
  @Input("model") model: any;
  @Output() save = new EventEmitter<MouseEvent>();
  datos: any[];

  constructor(private dataService: EmpresaService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.datos = data;
    });
  }

  Save() {
    this.save.emit(this.model);
  }
}
