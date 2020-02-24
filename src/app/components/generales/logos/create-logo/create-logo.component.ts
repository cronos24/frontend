import { Component, OnInit, ViewChild } from '@angular/core';
import { LogoService } from 'src/app/services/generales/logo.service';
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { Logo } from 'src/app/Models/general/Logo';

@Component({
  selector: 'app-create-logo',
  templateUrl: './create-logo.component.html',
  styles: []
})
export class CreateLogoComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model:  Logo = {
    logo_codi: null,
    cias_codi: null,
    logo_tipo: null,
    logo_imag: null,
    logo_alto: null,
    logo_anch: null,
    esta_codi: 'A',
    ciasCodi:{
      cias_rsoc:""
    },
    estaCodi:{
      esta_nomb:"",
      esta_colo:"",
      esta_tipo:""
    }
  };
  validationErrors: any[] = [];
  status: any;
  id: any;
  sub: any;

  constructor(
    private dataService: LogoService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.model.cias_codi= this.id;
    });
  }

  Save(e) {
    this.model = e;
    this.dataService.sendPostRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          this.model = data["model"];
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
          );
          this.route2.navigate(["empresas/view", this.model.cias_codi]);
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
