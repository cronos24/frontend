import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { PaisesService } from "../../../services/paises/paises.service";

@Component({
  selector: "app-index-paises",
  templateUrl: "./index-paises.component.html",
  styleUrls: ["./index-paises.component.css"]
})
export class IndexPaisesComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtInstance: DataTables.Api;
  dtTrigger = new Subject();

  paises = [];
  buttons = [];
  headers = [];

  temp = false;

  constructor(
    private dataService: PaisesService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Numero", "Iso 2", "Iso 3", "Nombre"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getPaises();
  }
  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getPaises() {
    this.dataService.sendGetRequest().subscribe(
      (data: any[]) => {
        this.paises = data;
        this.buttons = [
          {
            id: "view",
            label: "",
            class: "btn btn-success btn-sm",
            icon: "fas fa-eye",
            style: "2px;",
            href: "#",
            method: "showPais"
          },
          {
            id: "update",
            label: "",
            class: "btn btn-primary btn-sm",
            icon: "fas fa-pencil-alt",
            style: "margin:2px;",
            href: "#",
            method: "editPais"
          },
          {
            id: "delete",
            label: "",
            class: "btn btn-danger btn-sm",
            icon: "fas fa-trash-alt",
            style: "margin:2px;",
            href: "#",
            method: "deletePais"
          }
        ];

        this.dtTrigger.next();
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePais(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.paises.findIndex(item => item.pais_codi === id);
          this.paises.splice(index, 1);
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

  showPais(id) {
    this.route.navigate(["paises/view", id]);
    //console.log("showEstado: " + id);
  }

  editPais(id) {
    this.route.navigate(["paises/update", id]);
    //console.log("editEstado: " + id);
  }

  createPais() {
    this.route.navigate(["paises/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getPaises();
    });
  }
}
