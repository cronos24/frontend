import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MarcaService } from 'src/app/services/marca.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-marca',
  templateUrl: './index-marca.component.html',
  styles: []
})
export class IndexMarcaComponent implements OnInit {
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
    private dataService: MarcaService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Marca"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getMarcas();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getMarcas() {
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
          method: "showMarca"
        },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editMarca"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteMarca"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteMarca(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.models.findIndex(item => item.marc_codi === id);
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

  showMarca(id) {
    this.route.navigate(["marcas/view", id]);
    //console.log("showEstado: " + id);
  }

  editMarca(id) {
    this.route.navigate(["marcas/update", id]);
    //console.log("editEstado: " + id);
  }

  createMarca() {
    this.route.navigate(["marcas/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getMarcas();
    });
  }
}
