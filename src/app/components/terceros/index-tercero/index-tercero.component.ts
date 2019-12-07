import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { TercerosService } from "src/app/services/terceros.service";

@Component({
  selector: "app-index-tercero",
  templateUrl: "./index-tercero.component.html",
  styles: []
})
export class IndexTerceroComponent implements OnInit {
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
    private dataService: TercerosService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = [
      "Codigo",
      "No. Documento",
      "Nombre",
      "Ciudad de Residencia",
      "No. Celular",
      "Correo",
      "Estado"
    ];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getTerceros();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getTerceros() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.models = data;
      this.buttons = [
        {
          id: "view",
          label: "",
          class: "btn btn-success btn-sm",
          icon: "fas fa-eye",
          style: "2px;",
          href: "#",
          method: "showTercero"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editTercero"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deleteTercero"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteTercero(id) {
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

  showTercero(id) {
    this.route.navigate(["terceros/view", id]);
    //console.log("showEstado: " + id);
  }

  editTercero(id) {
    this.route.navigate(["terceros/update", id]);
    //console.log("editEstado: " + id);
  }

  createTercero(id) {
    this.route.navigate(["terceros/create", id]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getTerceros();
    });
  }
}
