import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ResolucionService } from 'src/app/services/facturacion/resolucion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-resolucion',
  templateUrl: './index-resolucion.component.html',
  styles: []
})
export class IndexResolucionComponent implements OnInit {
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
    private dataService: ResolucionService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Fecha", "Tipo", "Resolucion", "Inicio", "Fin", "Estado"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getReso();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getReso() {
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
          method: "showReso"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editReso"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteReso"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteReso(id) {
    if (confirm("Esta seguro de Inactivar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data["status"] === 1) {
          const index = this.models.findIndex(item => item.reso_codi === id);
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

  showReso(id) {
    this.route.navigate(["resoluciones/view", id]);
    //console.log("showEstado: " + id);
  }

  editReso(id) {
    this.route.navigate(["resoluciones/update", id]);
    //console.log("editEstado: " + id);
  }

  createReso() {
    this.route.navigate(["resoluciones/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getReso();
    });
  }
}
