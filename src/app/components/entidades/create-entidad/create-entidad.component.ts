import { Estado } from "src/app/Models/general/Estado";
import { Component, OnInit } from "@angular/core";
import { Entidad } from "src/app/Models/general/Entidad";
import { EntidadService } from "src/app/services/entidad.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-create-entidad",
  templateUrl: "./create-entidad.component.html",
  styles: []
})
export class CreateEntidadComponent implements OnInit {
  model: Entidad = {
    enad_codi: null,
    enad_nomb: "",
    esta_codi: "A",
    estaCodi: {
      esta_codi: null,
      esta_nomb: null,
      esta_tipo: null,
      esta_colo: null
    }
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: EntidadService,
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
          this.route2.navigate(["entidades/view", this.model.enad_codi]);
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
