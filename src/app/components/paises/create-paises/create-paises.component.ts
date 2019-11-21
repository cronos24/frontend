import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Pais } from "src/app/Models/general/Pais";
import { PaisesService } from "src/app/services/paises/paises.service";

@Component({
  selector: "app-create-paises",
  templateUrl: "./create-paises.component.html",
  styleUrls: ["./create-paises.component.css"]
})
export class CreatePaisesComponent implements OnInit {
  pais: Pais = {
    pais_codi: null,
    pais_isonum: null,
    pais_iso2: "",
    pais_iso3: "",
    pais_nombre: ""
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: PaisesService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {}

  Save() {
    delete this.pais.pais_codi;
    //console.log(this.estado);
    this.dataService.sendPostRequest(this.pais).subscribe(
      data => {
        this.pais = data[0];
        this.toastr.success(
          "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
        );
        this.route.navigate(["paises/view", this.pais.pais_codi]);
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
