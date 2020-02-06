import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TercerosImpuestosService } from 'src/app/services/generales/terceros-impuestos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-index-petr',
  templateUrl: './index-petr.component.html',
  styles: []
})
export class IndexPetrComponent implements OnInit {
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
    private dataService: TercerosImpuestosService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["#", "Impuestos", "Estado"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getPetr();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getPetr() {
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
          method: "editPetr"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deletePetr"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deletePetr(id) {
    if (confirm("Esta seguro de Inactivar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data["status"] === 1) {
          const index = this.models.findIndex(item => item.petr_codi === id);
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

  showPetr(id) {
    this.route.navigate(["terceros-impuestos/view", id]);
  }

  editPetr(id) {
    this.route.navigate(["terceros-impuestos/update", id]);
  }

  createPetr(id) {
    this.route.navigate(["terceros-impuestos/create", id]);
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getPetr();
    });
  }
}
