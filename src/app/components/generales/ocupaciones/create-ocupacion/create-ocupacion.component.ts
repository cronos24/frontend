import { Component, OnInit } from "@angular/core";
import { Ocupacion } from "src/app/Models/general/Ocupacion";
import { OcupacionService } from "src/app/services/generales/ocupacion.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-create-ocupacion",
  templateUrl: "./create-ocupacion.component.html",
  styles: []
})
export class CreateOcupacionComponent implements OnInit {
  model: Ocupacion = {
    ocup_codi: null,
    ocup_nomb: null
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: OcupacionService,
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
          this.route2.navigate(["ocupaciones/view", this.model.ocup_codi]);
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
      }
    );
  }
}
