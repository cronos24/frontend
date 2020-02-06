import { Component, OnInit } from "@angular/core";
import { Empresa } from "src/app/Models/general/Empresa";
import { EmpresaService } from "src/app/services/generales/empresa.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-create-empresa",
  templateUrl: "./create-empresa.component.html",
  styles: []
})
export class CreateEmpresaComponent implements OnInit {
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
  constructor(
    private dataService: EmpresaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {}

  Save(e) {
    this.model = e;
    this.dataService.sendPostRequest(this.model).subscribe(
      data => {
        if (data["status"] === 1) {
          this.model = data["model"];
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
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
        console.log(error);
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error en la transferencia de datos."
        );
        // this.validationErrors = error.error.errors;
        // this.status = error.status;
      }
    );
  }
}
