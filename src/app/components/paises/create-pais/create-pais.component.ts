import { Component, OnInit } from "@angular/core";
import { Pais } from "src/app/Models/general/Pais";
import { PaisService } from "src/app/services/generales/pais.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-create-pais",
  templateUrl: "./create-pais.component.html",
  styles: []
})
export class CreatePaisComponent implements OnInit {
  model: Pais = {
    pais_codi: null,
    pais_nombre: null,
    pais_iso2: null,
    pais_iso3: null,
    pais_isonum: null
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: PaisService,
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
          this.route2.navigate(["paises/view", this.model.pais_codi]);
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
