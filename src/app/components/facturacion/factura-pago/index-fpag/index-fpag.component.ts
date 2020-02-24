import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FacturaPagoService } from 'src/app/services/facturacion/factura-pago.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-fpag',
  templateUrl: './index-fpag.component.html',
  styles: []
})
export class IndexFpagComponent implements OnInit {
  @Input("parent_id") parent_id: any;
  @Input("estado_factura") estado_factura: any;
  @Input("tipo_factura") tipo_factura: any;

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
    private dataService: FacturaPagoService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["#", "Medio de Pago ", "Metodo de Pago","Referencia", "Valor","Fecha Vencimiento"];
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
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editFpag"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deleteFpag"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteFpag(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        //console.log(data);
        if (data["status"] === 1) {
          const index = this.models.findIndex(item => item.fpag_codi === id);
          this.models.splice(index, 1);
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.row("#" + id).remove();
            dtInstance.draw();
          });
          this.toastr.warning(
            "<i class='fas fa-exclamation-triangle fa-2x'></i> Registro Borrado con Exito!!!"
          );
        } else {
          this.toastr.error("No se puede borrar el registro.");
        }
      });
    }
  }

  showFpag(id) {
    this.route.navigate(["factura-pago/view", id]);
    //console.log("showEstado: " + id);
  }

  editFpag(id) {
    this.route.navigate(["factura-pago/update", id]);
    //console.log("editEstado: " + id);
  }

  createFpag(id) {
    this.route.navigate(["factura-pago/create", id]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getFpag();
    });
  }
}
