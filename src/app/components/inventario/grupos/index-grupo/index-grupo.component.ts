import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { GrupoService } from 'src/app/services/inventario/grupo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-grupo',
  templateUrl: './index-grupo.component.html',
  styles: []
})
export class IndexGrupoComponent implements OnInit {
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
    private dataService: GrupoService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Grupo", "Nombre", "Abreviatura"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getGrupo();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getGrupo() {
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
        //   method: "showGrupo"
        // },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editGrupo"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteGrupo"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteGrupo(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.models.findIndex(item => item.grup_codi === id);
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

  showGrupo(id) {
    this.route.navigate(["grupos/view", id]);
    //console.log("showEstado: " + id);
  }

  editGrupo(id) {
    this.route.navigate(["grupos/update", id]);
    //console.log("editEstado: " + id);
  }

  createGrupo() {
    this.route.navigate(["grupos/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getGrupo();
    });
  }
}
