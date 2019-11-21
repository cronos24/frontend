import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { EstadosService } from "src/app/services/estados/estados.service";
import { Estado } from "src/app/Models/general/Estado";

@Component({
  selector: "app-create-estados",
  templateUrl: "./create-estados.component.html",
  styleUrls: ["./create-estados.component.css"]
})
export class CreateEstadosComponent implements OnInit {
  estado: Estado = {
    esta_code: 0,
    esta_nomb: "",
    esta_codi: "",
    esta_tipo: "",
    esta_colo: ""
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: EstadosService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {}

  Save() {
    delete this.estado.esta_code;
    //console.log(this.estado);
    this.dataService.sendPostRequest(this.estado).subscribe(
      data => {
        this.estado = data[0];
        this.toastr.success(
          "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
        );
        this.route.navigate(["estados/view", this.estado.esta_codi]);
      },
      error => {
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error intente nuevamente."
        );
        this.validationErrors = error.error.errors;
        this.status = error.status;
      }
    );
  }
}
