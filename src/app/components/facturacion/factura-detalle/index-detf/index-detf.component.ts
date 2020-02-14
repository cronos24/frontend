import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FacturaDetalleService } from 'src/app/services/facturacion/factura-detalle.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-detf',
  templateUrl: './index-detf.component.html',
  styles: []
})
export class IndexDetfComponent implements OnInit {
  @Input("parent_id") parent_id: any;
  @Input("estado_factura") estado_factura: any;

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
    private dataService: FacturaDetalleService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["#", "Producto", "Unidad ", "Cantidad","Valor Unidad", "Descuento", "Iva", "Ic"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getDtfac();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getDtfac() {
    this.dataService.sendGetRequest(this.parent_id).subscribe((data: any[]) => {
      this.models = data;
      this.buttons = [
        // {
        //   id: "view",
        //   label: "",
        //   class: "btn btn-success btn-sm",
        //   icon: "fas fa-eye",
        //   style: "2px;",
        //   href: "#",
        //   method: "showDtfac"
        // },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editDtfac"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deleteDtfac"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteDtfac(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        //console.log(data);
        if (data === 1) {
          const index = this.models.findIndex(item => item.detf_codi === id);
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

  showDtfac(id) {
    this.route.navigate(["factura-detalle/view", id]);
    //console.log("showEstado: " + id);
  }

  editDtfac(id) {
    this.route.navigate(["factura-detalle/update", id]);
    //console.log("editEstado: " + id);
  }

  createDtfac(id) {
    this.route.navigate(["factura-detalle/create", id]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getDtfac();
    });
  }

}
