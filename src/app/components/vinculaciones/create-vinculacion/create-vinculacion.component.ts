import { Component, OnInit } from "@angular/core";
import { Vinculacion } from "src/app/Models/general/Vinculacion";
import { VinculacionService } from "src/app/services/vinculacion.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-create-vinculacion",
  templateUrl: "./create-vinculacion.component.html",
  styles: []
})
export class CreateVinculacionComponent implements OnInit {
  model: Vinculacion = {
    vinc_codi: null,
    vinc_nomb: null,
    vinc_cons: null
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: VinculacionService,
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
          this.route2.navigate(["vinculaciones/view", this.model.vinc_codi]);
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
