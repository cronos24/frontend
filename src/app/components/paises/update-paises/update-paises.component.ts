import { Component, OnInit } from "@angular/core";
import { Pais } from "src/app/Models/general/Pais";
import { PaisesService } from "src/app/services/paises/paises.service";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-paises",
  templateUrl: "./update-paises.component.html",
  styleUrls: ["./update-paises.component.css"]
})
export class UpdatePaisesComponent implements OnInit {
  pais: Pais = {
    pais_codi: null,
    pais_isonum: null,
    pais_iso2: "",
    pais_iso3: "",
    pais_nombre: ""
  };
  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: PaisesService,
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
      this.pais = data[0];
    });
  }
  Save() {
    //delete this.estado.esta_code;
    //console.log(this.estado);
    this.dataService.sendPutRequest(this.pais, this.id).subscribe(
      data => {
        console.log(data);
        //this.estado = data[0];
        this.toastr.success(
          "<i class='far fa-thumbs-up fa-2x'></i>  Registro Modificado con Exito!!!"
        );
        this.route2.navigate(["paises/view", this.pais.pais_codi]);
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
