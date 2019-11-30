import { Component, OnInit, ViewChild } from "@angular/core";
import { EstadosService } from "../../../services/estados/estados.service";
import { DataTablesModule, DataTableDirective } from "angular-datatables";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-components-index-estados",
  templateUrl: "./index-estados.component.html",
  styleUrls: ["./index-estados.component.css"]
})
export class EstadosIndexComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtInstance: DataTables.Api;
  dtTrigger = new Subject();

  estados = [];
  buttons = [];
  headers = [];

  temp = false;
  /* dtTrigger: Subject = new Subject(); */
  // dtElement: any;

  constructor(
    private dataService: EstadosService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Tipo", "Nombre", "Color"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getEstados();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getEstados() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.estados = data;
      this.buttons = [
        {
          id: "view",
          label: "",
          class: "btn btn-success btn-sm",
          icon: "fas fa-eye",
          style: "2px;",
          href: "#",
          method: "showEstado"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editEstado"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteEstado"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteEstado(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        //console.log(data);
        if (data === 1) {
          const index = this.estados.findIndex(item => item.esta_codi === id);
          this.estados.splice(index, 1);
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

  showEstado(id) {
    this.route.navigate(["estados/view", id]);
    //console.log("showEstado: " + id);
  }

  editEstado(id) {
    this.route.navigate(["estados/update", id]);
    //console.log("editEstado: " + id);
  }

  createEstado() {
    this.route.navigate(["estados/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getEstados();
    });
  }
}
