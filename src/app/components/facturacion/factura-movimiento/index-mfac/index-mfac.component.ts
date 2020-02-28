import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FacturaMovimientoService } from 'src/app/services/facturacion/factura-movimiento.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-mfac',
  templateUrl: './index-mfac.component.html',
  styles: []
})
export class IndexMfacComponent implements OnInit {
  @Input("parent_id") parent_id: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtInstance: DataTables.Api;
  dtTrigger = new Subject();

  models = [];
  buttons = [];
  headers = [];

  temp = false;

  constructor(
    private dataService: FacturaMovimientoService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["#", "Codigo del retorno", "Fecha Respuesta","Mensaje Retorno"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getFpag();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getFpag() {
    this.dataService.sendGetRequest(this.parent_id).subscribe((data: any[]) => {
      this.models = data;
      this.buttons = [
        {
          id: "view",
          label: "",
          class: "btn btn-success btn-sm",
          icon: "fas fa-eye",
          style: "2px;",
          href: "#",
          method: "showFpag"
        },
      ];

      this.dtTrigger.next();
    });
  }

 

  showFpag(id) {
    this.route.navigate(["factura-movimiento/view", id]);
    //console.log("showEstado: " + id);
  }

  
  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getFpag();
    });
  }
}
