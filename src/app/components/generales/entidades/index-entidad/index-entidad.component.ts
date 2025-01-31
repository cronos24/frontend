import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { EntidadService } from "src/app/services/generales/entidad.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-index-entidad",
  templateUrl: "./index-entidad.component.html",
  styles: []
})
export class IndexEntidadComponent implements OnInit {
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
    private dataService: EntidadService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Nombre", "Estado"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getEntidades();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getEntidades() {
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
          method: "showEntidad"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editEntidad"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteEntidad"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteEntidad(id) {
    if (confirm("Esta seguro de Inactivar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data["status"] === 1) {
          const index = this.models.findIndex(item => item.enad_codi === id);
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

  showEntidad(id) {
    this.route.navigate(["entidades/view", id]);
    //console.log("showEstado: " + id);
  }

  editEntidad(id) {
    this.route.navigate(["entidades/update", id]);
    //console.log("editEstado: " + id);
  }

  createEntidad() {
    this.route.navigate(["entidades/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getEntidades();
    });
  }
}
