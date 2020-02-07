import { Component, OnInit } from '@angular/core';
import { Resolucion } from 'src/app/Models/facturacion/resolucion';
import { ResolucionService } from 'src/app/services/facturacion/resolucion.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-resolucion',
  templateUrl: './create-resolucion.component.html',
  styles: []
})
export class CreateResolucionComponent implements OnInit {
  model: Resolucion = {
    reso_codi: null,
    reso_tfac: "",
    sede_codi: 1,
    cias_codi: 1,
    ciasCodi: null,
    reso_fech: null,
    reso_tipo: "",
    reso_reso: "",
    reso_ini: null,
    reso_fin: null,
    reso_pref: "",
    reso_cons: null,
    esta_codi: "A",
    estaCodi: null,
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: ResolucionService,
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
          this.route2.navigate(["resoluciones/view", this.model.reso_codi]);
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
