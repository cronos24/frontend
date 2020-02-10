import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { UnidadService } from 'src/app/services/generales/unidad.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-unidad',
  templateUrl: './index-unidad.component.html',
  styles: []
})
export class IndexUnidadComponent implements OnInit {
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
    private dataService: UnidadService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Id", "Codigo Dian", "Nombre", "Abreviatura"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getUnidad();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getUnidad() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.models = data;
      this.buttons = [
        // {
        //   id: "view",
        //   label: "",
        //   class: "btn btn-success btn-sm",
        //   icon: "fas fa-eye",
        //   style: "2px;",
        //   href: "#",
        //   method: "showUnidad"
        // },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editUnidad"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteUnidad"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteUnidad(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.models.findIndex(item => item.umed_codi === id);
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

  showUnidad(id) {
    this.route.navigate(["unidades/view", id]);
    //console.log("showEstado: " + id);
  }

  editUnidad(id) {
    this.route.navigate(["unidades/update", id]);
    //console.log("editEstado: " + id);
  }

  createUnidad() {
    this.route.navigate(["unidades/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getUnidad();
    });
  }
}
