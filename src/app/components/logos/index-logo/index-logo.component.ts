import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { LogoService } from "src/app/services/logo.service";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-index-logo",
  templateUrl: "./index-logo.component.html",
  styles: []
})
export class IndexLogoComponent implements OnInit {
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
    private dataService: LogoService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Tipo", "Imagen", "Estado"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getLogos();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getLogos() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.models = data;
      this.buttons = [
        {
          id: "view",
          label: "",
          class: "btn btn-success btn-sm",
          icon: "fas fa-eye",
          style: "2px;",
          href: "#",
          method: "showLogo"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editLogo"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deleteLogo"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteLogo(id) {
    if (confirm("Esta seguro de Inactivar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        console.log(data);
        if (data["status"] === 1) {
          const index = this.models.findIndex(item => item.logo_codi === id);
          this.models[index].esta_codi = data["model"].esta_codi;
          this.models[index].esta_nomb = "INACTIVO";
          // this.models.splice(index, 1);
          // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          //   dtInstance.row("#" + id).remove();
          //   dtInstance.draw();
          // });
          this.toastr.warning(
            "<i class='fas fa-exclamation-triangle fa-2x'></i> Registro Inactivado con Exito!!!"
          );
        } else {
          this.toastr.error("No se puede Inactivar el registro.");
        }
      });
    }
  }

  showLogo(id) {
    this.route.navigate(["logos/view", id]);
    //console.log("showEstado: " + id);
  }

  editLogo(id) {
    this.route.navigate(["logos/update", id]);
    //console.log("editEstado: " + id);
  }

  createLogo(id) {
    this.route.navigate(["logos/create", id]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getLogos();
    });
  }
}
