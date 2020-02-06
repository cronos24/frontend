import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { LineaService } from 'src/app/services/inventario/linea.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-linea',
  templateUrl: './index-linea.component.html',
  styles: []
})
export class IndexLineaComponent implements OnInit {
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
    private dataService: LineaService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Nombre", "Abreviatura"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getLinea();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getLinea() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.models = data;
      console.log(this.models);
      this.buttons = [
        // {
        //   id: "view",
        //   label: "",
        //   class: "btn btn-success btn-sm",
        //   icon: "fas fa-eye",
        //   style: "2px;",
        //   href: "#",
        //   method: "showLinea"
        // },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editLinea"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteLinea"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteLinea(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.models.findIndex(item => item.linea_codi === id);
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

  showLinea(id) {
    this.route.navigate(["lineas/view", id]);
    //console.log("showEstado: " + id);
  }

  editLinea(id) {
    this.route.navigate(["lineas/update", id]);
    //console.log("editEstado: " + id);
  }

  createLinea() {
    this.route.navigate(["lineas/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getLinea();
    });
  }
}
