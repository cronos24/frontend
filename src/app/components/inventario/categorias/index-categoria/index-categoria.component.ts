import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { CategoriaService } from 'src/app/services/inventario/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-index-categoria',
  templateUrl: './index-categoria.component.html',
  styles: []
})
export class IndexCategoriaComponent implements OnInit {
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
    private dataService: CategoriaService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.headers = ["Codigo", "Linea", "Nombre", "Abreviatura"];
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10
    };
    this.getCategoria();
  }

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>
      console.log(dtInstance)
    );
  }

  getCategoria() {
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
        //   method: "showCategoria"
        // },
        {
          id: "update",
          label: "",
          class: "btn btn-primary btn-sm",
          icon: "fas fa-pencil-alt",
          style: "margin:2px;",
          href: "#",
          method: "editCategoria"
        },
        {
          id: "delete",
          label: "",
          class: "btn btn-danger btn-sm",
          icon: "fas fa-trash-alt",
          style: "margin:2px;",
          href: "#",
          method: "deleteCategoria"
        }
      ];

      this.dtTrigger.next();
    });
  }

  deleteCategoria(id) {
    if (confirm("Esta seguro de Borrar el registro?")) {
      this.dataService.sendDeleteRequest(id).subscribe(data => {
        if (data === 1) {
          const index = this.models.findIndex(item => item.cate_codi === id);
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

  showCategoria(id) {
    this.route.navigate(["categorias/view", id]);
    //console.log("showEstado: " + id);
  }

  editCategoria(id) {
    this.route.navigate(["categorias/update", id]);
    //console.log("editEstado: " + id);
  }

  createCategoria() {
    this.route.navigate(["categorias/create"]);
    //console.log("createEstado");
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getCategoria();
    });
  }
}
