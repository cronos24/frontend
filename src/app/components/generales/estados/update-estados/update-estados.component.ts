import { Component, OnInit } from "@angular/core";
import { EstadosService } from "src/app/services/generales/estados/estados.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { Estado } from "src/app/Models/general/Estado";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-update-estados",
  templateUrl: "./update-estados.component.html",
  styleUrls: ["./update-estados.component.css"]
})
export class UpdateEstadosComponent implements OnInit {
  estado: Estado = {
    esta_nomb: "",
    esta_codi: "",
    esta_tipo: "",
    esta_colo: ""
  };
  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: EstadosService,
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
      this.estado = data[0];
    });
  }
  Save() {
    //delete this.estado.esta_code;
    //console.log(this.estado);
    this.dataService.sendPutRequest(this.estado, this.id).subscribe(
      data => {
        //console.log(data);
        //this.estado = data[0];
        this.toastr.success(
          "<i class='far fa-thumbs-up fa-2x'></i>  Registro Modificado con Exito!!!"
        );
        this.route2.navigate(["estados/view", this.estado.esta_codi]);
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
