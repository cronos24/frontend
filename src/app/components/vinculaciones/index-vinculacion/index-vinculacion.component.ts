import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { VinculacionService } from "src/app/services/vinculacion.service";
@Component({
  selector: "app-index-vinculacion",
  templateUrl: "./index-vinculacion.component.html",
  styles: []
})
export class IndexVinculacionComponent implements OnInit {
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
    private dataService: VinculacionService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Nombre", "Consecutivo"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getVinculaciones();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getVinculaciones() {
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
          method: "showVinculacion"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editVinculacion"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteVinculacion"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteVinculacion(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.models.findIndex(item => item.vinc_codi === id);
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

  showVinculacion(id) {
    this.route.navigate(["vinculaciones/view", id]);
    //console.log("showEstado: " + id);
  }

  editVinculacion(id) {
    this.route.navigate(["vinculaciones/update", id]);
    //console.log("editEstado: " + id);
  }

  createVinculacion() {
    this.route.navigate(["vinculaciones/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getVinculaciones();
    });
  }
}
