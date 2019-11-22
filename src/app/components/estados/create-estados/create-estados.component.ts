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
    //console.log(this.estado);
    this.dataService.sendPostRequest(this.estado).subscribe(
      data => {
        //console.log(data);

        if (data["status"] === 1) {
          //this.estado = data["model"];
          //console.log(this.estado.esta_codi);
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
          );
          this.route.navigate(["estados/view", this.estado.esta_codi]);
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
