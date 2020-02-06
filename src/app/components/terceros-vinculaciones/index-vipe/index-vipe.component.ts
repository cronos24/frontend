import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { TercerosVinculacionesService } from 'src/app/services/generales/terceros-vinculaciones.service';

@Component({
  selector: 'app-index-vipe',
  templateUrl: './index-vipe.component.html',
  styles: []
})
export class IndexVipeComponent implements OnInit {
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
    private dataService: TercerosVinculacionesService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["#", "Vinculacion"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getVipe();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getVipe() {
    this.dataService.sendGetRequest(this.parent_id).subscribe((data: any[]) => {
      this.models = data;
      this.buttons = [
        // {
        //   id: "view",
        //   label: "",
        //   class: "btn btn-success btn-sm",
        //   icon: "fas fa-eye",
        //   style: "2px;",
        //   href: "#",
        //   method: "showVipe"
        // },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editVipe"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-ban",
          style: "margin:2px;",
          href: "#",
          method: "deleteVipe"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteVipe(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        //console.log(data);
        if (data === 1) {
          const index = this.models.findIndex(item => item.vipe_codi === id);
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

  showVipe(id) {
    this.route.navigate(["terceros-vinculaciones/view", id]);
    //console.log("showEstado: " + id);
  }

  editVipe(id) {
    this.route.navigate(["terceros-vinculaciones/update", id]);
    //console.log("editEstado: " + id);
  }

  createVipe(id) {
    this.route.navigate(["terceros-vinculaciones/create", id]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getVipe();
    });
  }
}
