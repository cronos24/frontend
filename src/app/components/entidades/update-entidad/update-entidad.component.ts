import { Component, OnInit, ViewChild } from "@angular/core";
import { Entidad } from "src/app/Models/general/Entidad";
import { EntidadService } from "src/app/services/generales/entidad.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-update-entidad",
  templateUrl: "./update-entidad.component.html",
  styles: []
})
export class UpdateEntidadComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model: Entidad = {
    enad_codi: null,
    enad_nomb: "",
    esta_codi: "",
    estaCodi: {
      esta_codi: null,
      esta_nomb: null,
      esta_tipo: null,
      esta_colo: null
    }
  };

  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: EntidadService,
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
      this.model = data[0];
    });
  }
  Save(e) {
    this.model = e;

    this.dataService.sendPutRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Modificado con Exito!!!"
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
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error intente nuevamente."
        );
        console.log(error);
      }
    );
  }
}
