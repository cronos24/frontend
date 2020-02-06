import { Component, OnInit, ViewChild } from "@angular/core";
import { Empresa } from "src/app/Models/general/Empresa";
import { EmpresaService } from "src/app/services/generales/empresa.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-update-empresa",
  templateUrl: "./update-empresa.component.html",
  styles: []
})
export class UpdateEmpresaComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model: Empresa = {
    cias_codi: null,
    cias_nit: null,
    cias_dive: null,
    cias_rsoc: "",
    cias_dire: "",
    cias_tels: null,
    cias_celu: null,
    cias_mail: "",
    cias_web: "",
    cias_slog: "",
    cias_regi: "",
    cias_notf: "",
    cias_tipo: "",
    esta_codi: "",
    estaCodi: {
      esta_nomb:""
    }
  };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: EmpresaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.Edit(this.id);
    });
  }

  Edit(id) {
    this.dataService.sendShowRequest(id).subscribe(data => {
      //console.log(data);
      this.model = data[0];
    });
  }
  Save(e) {
    this.model = e;

    this.dataService.sendPutRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          // console.log(data);
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Modificado con Exito!!!"
          );
          this.route2.navigate(["empresas/view", this.model.cias_codi]);
        } else {
          this.toastr.error(
            " <i class='fas fa-ban fa-2x'></i> El formulario tiene algunos errores."
          );
          this.validationErrors = data["errors"];
          this.status = data["status"];
        }
      },
      error => {
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error intente nuevamente."
        );
        console.log(error);
      }
    );
  }
}
