import { Component, OnInit, ViewChild } from '@angular/core';
import { Resolucion } from 'src/app/Models/facturacion/Resolucion';
import { ResolucionService } from 'src/app/services/facturacion/resolucion.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-resolucion',
  templateUrl: './update-resolucion.component.html',
  styles: []
})
export class UpdateResolucionComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model: Resolucion = {
    reso_codi: null,
    reso_tfac: "",
    sede_codi: null,
    sedeCodi:null,
    cias_codi: null,
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
  id: any;
  sub: any;

  constructor(
    private dataService: ResolucionService,
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
      //console.log(data);
      this.model = data[0];
    });
  }
  Save(e) {
    this.model = e;

    this.dataService.sendPutRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          // console.log(data);
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Modificado con Exito!!!"
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
        this.toastr.error(
          " <i class='fas fa-ban fa-2x'></i> Se produjo un error intente nuevamente."
        );
        console.log(error);
      }
    );
  }
}
