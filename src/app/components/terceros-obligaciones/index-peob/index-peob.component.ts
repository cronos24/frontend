import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TercerosObligacionesService } from 'src/app/services/generales/terceros-obligaciones.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-peob',
  templateUrl: './index-peob.component.html',
  styles: []
})
export class IndexPeobComponent implements OnInit {
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
    private dataService: TercerosObligacionesService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["#", "Obligaciones", "Estado"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getPeob();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getPeob() {
    this.dataService.sendGetRequest(this.parent_id).subscribe((data: any[]) => {
      this.models = data;
      this.buttons = [
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editPeob"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deletePeob"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deletePeob(id) {
    if (confirm("Esta seguro de Inactivar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data["status"] === 1) {
          const index = this.models.findIndex(item => item.peob_codi === id);
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

  showPeob(id) {
    this.route.navigate(["terceros-obligaciones/view", id]);
  }

  editPeob(id) {
    this.route.navigate(["terceros-obligaciones/update", id]);
  }

  createPeob(id) {
    this.route.navigate(["terceros-obligaciones/create", id]);
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getPeob();
    });
  }
}
