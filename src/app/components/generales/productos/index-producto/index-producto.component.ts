import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ProductoService } from 'src/app/services/generales/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-producto',
  templateUrl: './index-producto.component.html',
  styles: []
})
export class IndexProductoComponent implements OnInit {
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
    private dataService: ProductoService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = [
      "id",
      "Cod. Inventario",
      "Descripcion",
      "Referencia",
      "Estado"
    ];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getProducto();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getProducto() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.models = data;
      //console.log(this.models);
      this.buttons = [
        {
          id: "view",
          label: "",
          class: "btn btn-success btn-sm",
          icon: "fas fa-eye",
          style: "2px;",
          href: "#",
          method: "showProducto"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editProducto"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deleteProducto"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteProducto(id) {
    if (confirm("Esta seguro de Inactivar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data["status"] === 1) {
          const index = this.models.findIndex(item => item.pers_auxi === id);
          this.models[index].esta_codi = data["model"].esta_codi;
          this.models[index].estaCodi.esta_nomb = "INACTIVO";
          this.toastr.warning(
            "<i class='fas fa-exclamation-triangle fa-2x'></i> Registro Inactivado con Exito!!!"
          );
        } else {
          this.toastr.error("No se puede Inactivar el registro.");
        }
      });
    }
  }

  showProducto(id) {
    this.route.navigate(["productos/view", id]);
    //console.log("showEstado: " + id);
  }

  editProducto(id) {
    this.route.navigate(["productos/update", id]);
    //console.log("editEstado: " + id);
  }

  createProducto() {
    this.route.navigate(["productos/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getProducto();
    });
  }
}
