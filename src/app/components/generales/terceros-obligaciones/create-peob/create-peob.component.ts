import { Component, OnInit, ViewChild } from '@angular/core';
import { TerceroObligacion } from 'src/app/Models/general/TerceroObligacion';
import { TercerosObligacionesService } from 'src/app/services/generales/terceros-obligaciones.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-peob',
  templateUrl: './create-peob.component.html',
  styles: []
})
export class CreatePeobComponent implements OnInit {
  @ViewChild("form", { static: false }) form;

  model:  TerceroObligacion = {
    peob_codi: null,
    pers_auxi: null,
    obli_codi: null,
    obliCodi: {
      obli_codi: null,
      obli_code: null,
      obli_desc: null,
    },
    esta_codi: "A",
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
    private dataService: TercerosObligacionesService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private route2: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.model.pers_auxi= this.id;
    });
  }

  Save(e) {
    this.model = e;
    //console.log(this.model);
    this.dataService.sendPostRequest(this.model, this.id).subscribe(
      data => {
        if (data["status"] === 1) {
          this.model = data["model"];
          this.toastr.success(
            "<i class='far fa-thumbs-up fa-2x'></i>  Registro Guardado con Exito!!!"
          );
          this.route2.navigate(["terceros/view", this.model.pers_auxi]);
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
