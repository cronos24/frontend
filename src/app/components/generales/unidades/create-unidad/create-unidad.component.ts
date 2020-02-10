import { Component, OnInit } from '@angular/core';
import { Unidad } from 'src/app/Models/general/Unidad';
import { UnidadService } from 'src/app/services/generales/unidad.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-unidad',
  templateUrl: './create-unidad.component.html',
  styles: []
})
export class CreateUnidadComponent implements OnInit {
  model: Unidad = {
    umed_codi: null,
    umed_codd: null,
    umed_nomb: null,
    umed_abre: null
  };
  validationErrors: any[] = [];
  status: any;
  constructor(
    private dataService: UnidadService,
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
          this.route2.navigate(["unidades"]);
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
