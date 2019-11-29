import { Component, OnInit, ViewChild } from "@angular/core";
import { OcupacionService } from "src/app/services/ocupacion.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

@Component({
  selector: "app-index-ocupacion",
  templateUrl: "./index-ocupacion.component.html",
  styles: []
})
export class IndexOcupacionComponent implements OnInit {
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
    private dataService: OcupacionService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Nombre"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getOcupaciones();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getOcupaciones() {
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
          method: "showOcupacion"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editOcupacion"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteOcupacion"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteOcupacion(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.models.findIndex(item => item.ocup_codi === id);
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

  showOcupacion(id) {
    this.route.navigate(["ocupaciones/view", id]);
    //console.log("showEstado: " + id);
  }

  editOcupacion(id) {
    this.route.navigate(["ocupaciones/update", id]);
    //console.log("editEstado: " + id);
  }

  createOcupacion() {
    this.route.navigate(["ocupaciones/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getOcupaciones();
    });
  }
}
